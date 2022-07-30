from pydantic import BaseModel


class UserUpdate(BaseModel):
    description: str | None
