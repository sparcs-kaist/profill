from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm

from app.core.auth import authenticate
from app.core.security import create_access_token
from app.schemas import Token

router = APIRouter()


@router.post("/", response_model=Token)
async def login(body: OAuth2PasswordRequestForm = Depends()) -> Token:
    user = authenticate(body.username, body.password)

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    return Token(access_token=create_access_token(user.username))
