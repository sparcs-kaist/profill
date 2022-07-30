from fastapi import FastAPI
from server import api
from server.core.database import init_db

app = FastAPI()

app.include_router(api.router)


@app.on_event("startup")
def on_startup():
    """
    Startup function.
    """
    init_db()
