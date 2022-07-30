from datetime import datetime, timedelta
from jose import jwt, JWTError

from app.core.config import settings


class TokenError(Exception):
    pass


def create_access_token(payload: str) -> str:
    expire = datetime.utcnow() + timedelta(
        days=settings.ACCESS_TOKEN_EXPIRE_DAYS
    )
    return jwt.encode(
        {"sub": payload, "exp": expire},
        settings.SECRET_KEY,
        algorithm=settings.ALGORITHM
    )


def decode_access_token(token: str) -> str:
    try:
        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )
        expire = payload.get("exp")
        if expire is None or datetime.now() >= datetime.fromtimestamp(expire):
            raise TokenError

        payload = payload.get("sub")
        if payload is None:
            raise TokenError
        return payload

    except JWTError:
        raise TokenError
