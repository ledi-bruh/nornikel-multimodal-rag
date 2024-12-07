from pydantic import BaseModel

from .document import Document

__all__ = ['AnswerModel']


class AnswerModel(BaseModel):
    documents: list[Document]
    answer: str | None = None
