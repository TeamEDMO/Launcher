import asyncio
import http.server
from multiprocessing import Process

from Server import EDMOBackend


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
    frontendProcess = Process(target=runServer, args=["Controller", 8081])
    adminProcess = Process(target=runServer, args=["Admin", 9000])

    try:
        frontendProcess.start()
        adminProcess.start()
        asyncio.run(EDMOBackend.main())

    finally:
        frontendProcess.kill()
        adminProcess.kill()
