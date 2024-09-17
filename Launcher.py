import asyncio
import http.server
from multiprocessing import Process
import socket
import sys

sys.path.append("Server")
import EDMOBackend  # noqa:E402


def handler_from(directory):
    def _init(self, *args, **kwargs):
        return http.server.SimpleHTTPRequestHandler.__init__(
            self, *args, directory=self.directory, **kwargs
        )

    return type(
        f"HandlerFrom<{directory}>",
        (http.server.SimpleHTTPRequestHandler,),
        {"__init__": _init, "directory": directory},
    )


def runServer(directory: str, port: int):
    with http.server.HTTPServer(("", port), handler_from(directory)) as httpd:
        print("serving at port", port)
        httpd.serve_forever()


if __name__ == "__main__":
    hostname = socket.gethostname()
    IPAddr = socket.gethostbyname(hostname)

    frontendProcess = Process(target=runServer, args=["Controller", 8081])
    adminProcess = Process(target=runServer, args=["Admin", 9000])

    try:
        frontendProcess.start()
        adminProcess.start()

        print(
            f"\nBackend server is hosted on {IPAddr}:8000 (User should not directly connect to this)\n"
        )

        print(f"Controller frontend is hosted on {IPAddr}:8081")
        print(f"Teacher frontend is hosted on {IPAddr}:9000")

        print(
            "\nIf the same computer/router is used, the above IP addresses should stay the same. QR codes are recommended for easier connection\n"
        )

        asyncio.run(EDMOBackend.main())

    finally:
        frontendProcess.kill()
        adminProcess.kill()
