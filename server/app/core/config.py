import secrets

from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "Profill server"

    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_DAYS: int = 30
    ALGORITHM: str = "HS256"

    BACKEND_CORS_ORIGINS: list = ["http://localhost:3000"]

    DATABASE_URL: str = "sqlite:///data.db"



settings = Settings(_env_file=".env")
