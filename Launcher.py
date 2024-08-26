import asyncio
import http.server
import multiprocessing
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


serverProcess = Process(target=EDMOBackend.main)
frontendProcess = Process(target=runServer, args=["Controller", 8081])
adminProcess = Process(target=runServer, args=["Admin", 9000])

try:
    frontendProcess.start()
    adminProcess.start()
    asyncio.run(EDMOBackend.main())
    while True:
        pass
finally:
    serverProcess.join()
    frontendProcess.join()
    adminProcess.join()

