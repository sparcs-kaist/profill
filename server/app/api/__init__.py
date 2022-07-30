from fastapi import APIRouter

from . import auth, users, images, comments

router = APIRouter()

router.include_router(auth.router, prefix="/auth", tags=["auth"])
router.include_router(users.router, prefix="/users", tags=["users"])
router.include_router(images.router, prefix="/images", tags=["images"])
router.include_router(comments.router, tags=["comments"])
