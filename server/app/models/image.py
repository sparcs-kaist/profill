from typing import Optional
from datetime import datetime

from sqlmodel import SQLModel, Field


class Image(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    creator_id: int = Field(foreign_key="user.id")
    url: str
    created_at: str = datetime.now().timestamp()
