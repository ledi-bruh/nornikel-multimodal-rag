from pydantic import BaseModel

from .document import Document

__all__ = ['AnswerModel']


class AnswerModel(BaseModel):
    answer: str | None = None
    documents: list[Document]
