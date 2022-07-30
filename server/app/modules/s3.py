from enum import Enum

import boto3
from uuid import uuid4
from fastapi import UploadFile

from app.core.config import settings

client = boto3.client(
    "s3",
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
)


class Storage(Enum):
    PROFILE = "profiles"
    GALLERY = "gallery"


def upload_file(file: UploadFile, storage: Storage) -> str:
    extension = file.content_type.split("/")[1]
    file_name = f"{storage.value}/{uuid4()}.{extension}"

    client.upload_fileobj(
        file.file,
        settings.AWS_BUCKET_NAME,
        file_name,
        ExtraArgs={"ContentType": file.content_type},
    )

    return f"https://{settings.AWS_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/{file_name}"
