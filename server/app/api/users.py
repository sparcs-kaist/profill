from fastapi import APIRouter, Depends, HTTPException
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


@router.get("/me", response_model=User)
async def get_me(current_user: User = Depends(get_current_user)) -> User:
    print(current_user)
    return current_user


@router.get("/{username}", response_model=User)
async def get_user(username: str, current_user: User = Depends(get_current_user)) -> User:
    with Session(engine) as session:
        user = session.exec(
            select(User)
            .where(User.username == username)
        ).one_or_none()

        if user is None:
            raise HTTPException(status_code=404, detail="User not found")

        return user
