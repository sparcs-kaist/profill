from fastapi import APIRouter
from sqlmodel import Session, select

from server.core.database import engine
from server.models import User

router = APIRouter()


@router.get("/", response_model=list[User])
async def get_users() -> list[User]:
    with Session(engine) as session:
        users = session.exec(select(User)).all()
        return users
