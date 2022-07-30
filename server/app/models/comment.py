from typing import Optional

from sqlmodel import SQLModel, Field


class Comment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    creator_id: int = Field(foreign_key="user.id")
    user_id: int = Field(foreign_key="user.id")
    content: str
