from fastapi import APIRouter, UploadFile, HTTPException, File, Depends
from sqlmodel import Session

from app.core.config import settings
from app.core.deps import get_current_user
from app.core.database import engine
from app.models.user import User
from app.modules.s3 import upload_file, Storage

import boto3

client = boto3.client(
    "s3",
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
)


router = APIRouter()


@router.post("/profile", status_code=204)
async def upload_profile_image(
        profile_image: UploadFile = File(...),
        current_user: User = Depends(get_current_user)
):
    if profile_image.content_type.split("/")[0] != "image":
        raise HTTPException(status_code=400, detail="Image only")

    file_id = upload_file(profile_image, Storage.PROFILE)

    with Session(engine) as session:
        current_user.profile_image = file_id
        session.add(current_user)
        session.commit()
        session.refresh(current_user)

