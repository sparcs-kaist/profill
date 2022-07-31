from pydantic import BaseModel

from app.models import User


class CreateComment(BaseModel):
    content: str


class JoinedComment(BaseModel):
    id: int
    creator: User
    content: str
    created_at: str
