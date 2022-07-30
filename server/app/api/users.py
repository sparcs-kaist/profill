from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from app.core.database import engine
from app.core.deps import get_current_user
from app.models import User
from app.schemas import UserUpdate

router = APIRouter()


@router.get("/", response_model=list[User])
async def get_users(current_user: User = Depends(get_current_user)) -> list[User]:
    query = select(User).where(User.id != current_user.id)

    with Session(engine) as session:
        users = session.exec(query).all()

    return users


@router.get("/me", response_model=User)
async def get_me(current_user: User = Depends(get_current_user)) -> User:
    return current_user


@router.post("/me", response_model=User)
async def update_me(
        user_update: UserUpdate,
        current_user: User = Depends(get_current_user)):
    with Session(engine) as session:
        for key, value in user_update.dict(exclude_unset=True).items():
            setattr(current_user, key, value)
        session.add(current_user)
        session.commit()
        session.refresh(current_user)
    return current_user


@router.get("/{username}", response_model=User)
async def get_user(username: str, current_user: User = Depends(get_current_user)) -> User:
    query = select(User).where(User.username == username)

    with Session(engine) as session:
        user = session.exec(query).one_or_none()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    return user
