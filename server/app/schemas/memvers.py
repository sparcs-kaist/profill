from pydantic import BaseModel


class MemversUser(BaseModel):
    id: str
    name: str

    phone: str | None
    email: str | None
    birth: str | None
    dorm: str | None
    blog: str | None
    website: str | None
    org: str | None
    lab: str | None
    home_add: str | None

    is_designer: bool
    is_developer: bool
    is_private: bool
    is_undergraduate: bool

    battlenet_id: str | None
    behance_url: str | None
    facebook_id: str | None
    github_id: str | None
    linkedin_url: str | None
    twitter_id: str | None

    created_on: str | None
    updated_on: str | None

