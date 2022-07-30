from fastapi import APIRouter

from server.schemas import UserLogin

router = APIRouter()


@router.post("/")
async def login(body: UserLogin):
    pass
