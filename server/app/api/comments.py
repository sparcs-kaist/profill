from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from app.core.deps import get_current_user
from app.core.database import engine
from app.models import Comment, User
from app.schemas import CreateComment, JoinedComment

router = APIRouter(dependencies=[Depends(get_current_user)])


@router.get("/{username}/comments", response_model=list[JoinedComment])
async def get_comments(username: str) -> list[JoinedComment]:
    with Session(engine) as session:
        raw_comments = session.exec(
            select(Comment)
            .join(User, onclause=Comment.user_id == User.id)
            .where(User.username == username)
        ).all()

        users_map = {
            user.id: user
            for user in session.exec(select(User)).all()
        }

        comments = [
            JoinedComment(
                **c.dict(),
                creator=users_map[c.creator_id],
            ) for c in raw_comments
        ]

    return comments


@router.post("/{username}/comments", response_model=JoinedComment)
async def write_comment(
        username: str,
        comment_create: CreateComment,
        current_user: User = Depends(get_current_user)
) -> JoinedComment:
    with Session(engine) as session:
        user = session.exec(
            select(User)
            .where(User.username == username)
        ).one_or_none()

        if user is None:
            raise HTTPException(status_code=404, detail="User not found")

        comment = Comment(
            creator_id=current_user.id,
            user_id=user.id,
            content=comment_create.content,
        )

        session.add(comment)
        session.commit()
        session.refresh(comment)

        return JoinedComment(
            **comment.dict(),
            creator=current_user,
        )
