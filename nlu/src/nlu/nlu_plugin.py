from typing import AsyncGenerator, get_type_hints

from fastapi import FastAPI
from qdrant_client import AsyncQdrantClient

from src.ioc import ioc
from src.settings import Settings
from .web import FindAnswerView
from .impl import VectorRepositoryImpl

__all__ = ['nlu_plugin']


async def nlu_plugin(settings: Settings) -> AsyncGenerator:
    fastapi = ioc.resolve(FastAPI)

    repository = VectorRepositoryImpl(
        qdrant_client=AsyncQdrantClient(
            url=settings.qdrant_url,
        ),
        collection_name=settings.qdrant_collection_name,
    )

    find_answer_view = FindAnswerView(  # ручка
        repository=repository,
    )
    fastapi.add_api_route(  # добавление ручки
        path='/answer',
        name='Найти ответ по базе знаний',
        tags=['NLU'],
        methods=['POST'],
        endpoint=find_answer_view.__call__,
        response_model=get_type_hints(find_answer_view.__call__)['return'],
    )

    yield
