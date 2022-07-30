import requests
from sqlmodel import Session, select

from app.core.database import engine
from app.modules import memvers
from app.models import User


def authenticate(username, password) -> User | None:
    with requests.session() as session:
        if not memvers.login(session, username, password):
            return None

        user_data = memvers.get_user(session)

    with Session(engine) as session:
        user = session.exec(
            select(User)
            .where(User.username == user_data.id)
        ).first()

        if user is None:
            user = User(
                name=user_data.name,
                username=user_data.id,
            )
            session.add(user)
            session.commit()
            session.refresh(user)

        return user
