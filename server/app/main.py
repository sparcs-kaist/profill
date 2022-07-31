from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app import api
from app.core.database import init_db
from app.core.config import settings

app = FastAPI()

app.include_router(api.router, prefix="/api")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://ssal.sparcs.org:42293/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    """
    Startup function.
    """
    init_db()
