import asyncio

from src.nlu.utils import get_multi_embedding, get_answer, b64_to_img
from ..models import AnswerModel
from ..core import VectorRepository

__all__ = ['FindAnswerView']


class FindAnswerView:
    def __init__(self, repository: VectorRepository):
        self._repository = repository

    async def __call__(self, query: str, top_k: int = 10) -> AnswerModel:
        embedding = await asyncio.to_thread(get_multi_embedding, query=query)

        docs = await self._repository.get_relevance_documents(embedding, top_k)

        answer = await asyncio.to_thread(get_answer, query=query, images=[b64_to_img(doc.metadata.image) for doc in docs])

        return AnswerModel(
            answer=answer,
            documents=docs,
        )
