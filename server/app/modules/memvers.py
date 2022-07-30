from requests import Session
from app.schemas import MemversUser

BASE_URL = "https://memvers-api.sparcs.org/"


def login(session: Session, username: str, password: str) -> bool:
    return session.post(
        BASE_URL + "login",
        json={"un": username, "pw": password}
    ).json()["success"]


def get_user(session: Session, username: str = "") -> MemversUser:
    data = session.get(BASE_URL + "nugu/" + username).json()
    return MemversUser(**data["objs"][0] if username else data["obj"])
