from fastapi import APIRouter, UploadFile, HTTPException, File, Depends
from sqlmodel import Session, select

from app.core.config import settings
from app.core.deps import get_current_user
from app.core.database import engine
from app.models import User, Image
from app.modules.s3 import upload_file, Storage

import boto3

client = boto3.client(
    "s3",
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
)

router = APIRouter(dependencies=[Depends(get_current_user)])


@router.post("/profile", response_model=User, status_code=201)
async def upload_profile_image(
        profile_image: UploadFile = File(...),
        current_user: User = Depends(get_current_user)
):
    if profile_image.content_type.split("/")[0] != "image":
        raise HTTPException(status_code=400, detail="Image only")

    file_url = upload_file(profile_image, Storage.PROFILE)

    with Session(engine) as session:
        current_user.profile_image = file_url
        session.add(current_user)
        session.commit()
        session.refresh(current_user)

    return current_user


@router.get("/{username}/gallery", response_model=list[Image])
async def get_user_gallery(username: str) -> list[Image]:
    query = select(Image)\
        .join(User, onclause=Image.user_id == User.id)\
        .where(User.username == username)

    with Session(engine) as session:
        images = session.exec(query).all()

    return images


@router.post("/{username}/gallery", response_model=Image, status_code=201)
async def upload_gallery_image(
        username: str,
        gallery_image: UploadFile = File(...),
        current_user: User = Depends(get_current_user)) -> Image:
    with Session(engine) as session:
        user = session.exec(
            select(User).where(User.username == username)
        ).one_or_none()

        if user is None:
            raise HTTPException(status_code=404, detail="User not found")

        file_url = upload_file(gallery_image, Storage.GALLERY)

        image = Image(
            user_id=user.id,
            creator_id=current_user.id,
            url=file_url,
        )

        session.add(image)
        session.commit()
        session.refresh(image)

    return image
