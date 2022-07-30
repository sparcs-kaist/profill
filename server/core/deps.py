from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session, select

from server.core.database import engine
from server.models import User
from server.core.auth import decode_access_token, TokenError

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="auth/login-docs"
)

credentials_exception = HTTPException(
    status_code=401,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


async def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    try:
        user_id = decode_access_token(token)
    except TokenError:
        raise credentials_exception

    with Session(engine) as session:
        user = session.exec(select(User).where(User.id == user_id)).first()
        if user is None:
            raise credentials_exception
        return user

