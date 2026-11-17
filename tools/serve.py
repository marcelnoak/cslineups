"""Lokaler Server für das Lineup-Buch inkl. Speichern aus dem Editor.

Start (im Projektordner):   python tools/serve.py        → http://localhost:8765/
Anderer Port:               python tools/serve.py 9000

Liefert die Seite aus wie `python -m http.server` und nimmt zusätzlich die
Speicher-Aufrufe des Editors an (POST /api/write?path=…). Geschrieben werden
darf nur unter images/ und data/, nur .webp- und .js-Dateien, und nur von der
eigenen Seite aus – andere Webseiten im Browser können nichts schreiben.
Der Server ist ausschließlich auf diesem Rechner erreichbar (127.0.0.1).
"""
import json
import socket
import sys
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent.parent
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
WRITABLE = {"images": {".webp"}, "data": {".js"}}
MAX_BYTES = 25 * 1024 * 1024
HOSTS = {f"localhost:{PORT}", f"127.0.0.1:{PORT}", f"[::1]:{PORT}"}
# Browser lösen "localhost" oft zuerst als IPv6 (::1) auf – daher auf beiden Loopback-Adressen lauschen.
LOOPBACK = [(socket.AF_INET, "127.0.0.1"), (socket.AF_INET6, "::1")]


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Nach dem Speichern sofort den neuen Stand zeigen, nicht den Browser-Cache
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if urlparse(self.path).path == "/api/ping":
            return self.reply(200, {"ok": True})
        super().do_GET()

    def do_POST(self):
        url = urlparse(self.path)
        if url.path != "/api/write":
            return self.reply(404, {"error": "Unbekannter Endpunkt"})
        # Nur Anfragen der eigenen Seite: Host passt (kein DNS-Rebinding), Origin ist die eigene
        # Seite, und der Editor-Header erzwingt bei fremden Seiten eine CORS-Prüfung, die hier nie bestanden wird.
        origin = self.headers.get("Origin", "")
        if (self.headers.get("Host") not in HOSTS
                or origin not in {f"http://{h}" for h in HOSTS}
                or self.headers.get("X-Lineup-Editor") != "1"):
            return self.reply(403, {"error": "Nur der Editor dieser Seite darf speichern."})

        rel = (parse_qs(url.query).get("path") or [""])[0]
        target = (ROOT / rel).resolve()
        try:
            top = target.relative_to(ROOT).parts[0]
        except (ValueError, IndexError):
            return self.reply(400, {"error": f"Pfad außerhalb des Projekts: {rel}"})
        if top not in WRITABLE or target.suffix.lower() not in WRITABLE[top]:
            return self.reply(400, {"error": f"Schreiben nicht erlaubt: {rel}"})

        size = int(self.headers.get("Content-Length") or 0)
        if size > MAX_BYTES:
            return self.reply(413, {"error": "Datei zu groß"})
        data = self.rfile.read(size)
        target.parent.mkdir(parents=True, exist_ok=True)
        tmp = target.with_name(target.name + ".tmp")
        tmp.write_bytes(data)
        tmp.replace(target)  # erst komplett schreiben, dann austauschen
        self.log_message("gespeichert: %s (%d Bytes)", rel, len(data))
        return self.reply(200, {"ok": True})

    def reply(self, code, body):
        raw = json.dumps(body).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)


def port_taken(family, host):
    with socket.socket(family, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        return s.connect_ex((host, PORT)) == 0


class Server(ThreadingHTTPServer):
    daemon_threads = True


if __name__ == "__main__":
    # Läuft schon ein anderer Server auf dem Port (z. B. noch "python -m http.server"), würde der
    # Browser je nach Adresse mal den einen, mal den anderen erreichen – also lieber gar nicht starten.
    if any(port_taken(f, h) for f, h in LOOPBACK if socket.has_ipv6 or f == socket.AF_INET):
        sys.exit(f"Port {PORT} ist schon belegt – läuft noch ein anderer Server (z. B. python -m http.server)?\n"
                 f"Den bitte mit Strg+C beenden oder einen anderen Port wählen: python tools/serve.py 8766")

    handler = partial(Handler, directory=str(ROOT))
    servers = []
    for family, host in LOOPBACK:
        try:
            srv = type("S", (Server,), {"address_family": family})((host, PORT), handler)
            servers.append(srv)
        except OSError:
            if family == socket.AF_INET:
                raise  # IPv4 muss gehen; IPv6 ist optional
    for srv in servers[1:]:
        threading.Thread(target=srv.serve_forever, daemon=True).start()

    print(f"Lineup-Buch:  http://localhost:{PORT}/")
    print(f"Editor:       http://localhost:{PORT}/editor.html")
    print("Beenden mit Strg+C")
    try:
        servers[0].serve_forever()
    except KeyboardInterrupt:
        pass
