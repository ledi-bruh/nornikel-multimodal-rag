import asyncio

from src.nlu.utils import get_multi_embedding
from ..models import AnswerModel
from ..core import VectorRepository

__all__ = ['FindAnswerView']


class FindAnswerView:
    def __init__(self, repository: VectorRepository):
        self._repository = repository

    async def __call__(self, query: str, top_k: int = 10) -> AnswerModel:
        embedding = await asyncio.to_thread(get_multi_embedding, query=query)

        docs = await self._repository.get_relevance_documents(embedding, top_k)

        answer = None

        return AnswerModel(
            documents=docs,
            answer=answer,
        )
