from fastapi import APIRouter

from app.schemas import UserLogin

router = APIRouter()


@router.post("/")
async def login(body: UserLogin):
    pass
