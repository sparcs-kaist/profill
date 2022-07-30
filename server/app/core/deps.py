from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session, select

from app.core.database import engine
from app.models import User
from app.core.security import decode_access_token, TokenError

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="auth/"
)

credentials_exception = HTTPException(
    status_code=401,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


async def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    try:
        username = decode_access_token(token)
        print("QWERQWER" + username)
    except TokenError:
        raise credentials_exception

    with Session(engine) as session:
        user = session.exec(
            select(User)
            .where(User.username == username)
        ).one_or_none()

        if user is None:
            raise credentials_exception
        return user

