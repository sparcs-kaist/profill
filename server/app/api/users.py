from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from app.core.database import engine
from app.core.deps import get_current_user
from app.models import User

router = APIRouter()


@router.get("/", response_model=list[User])
async def get_users(current_user: User = Depends(get_current_user)) -> list[User]:
    with Session(engine) as session:
        users = session.exec(
            select(User)
            .where(User.id != current_user.id)
        ).all()

        return users
