from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.shared.swagger import swagger_plugin
from src.nlu.nlu_plugin import nlu_plugin
from .app import App
from .ioc import ioc
from .settings import Settings

__all__ = ['bootstrap']


def bootstrap(
    app: App,
    settings: Settings,
) -> None:
    """
    Функция для сборки приложения.
    """
    ioc.register(Settings, instance=settings)

    # В приложение добавляются плагины -- процесс сборки
    app.add_plugin(swagger_plugin(settings.swagger))
    app.add_plugin(nlu_plugin(settings))

    # Определен жизненный цикл приложения
    @asynccontextmanager
    async def lifespan(_):
        await app.startapp()
        yield
        await app.shutdown()

    tags = [
        {'name': 'NLU', 'description': 'NLU-модуль'},
    ]

    fastapi = FastAPI(
        title=settings.app_title,
        lifespan=lifespan,
        version='1.0.0',
        # openapi_url='/openapi.json',
        openapi_tags=tags,
        redoc_url=None,
        **dict(docs_url=None) if settings.swagger.files_dir_path else dict(),  # для локального сваггера
    )

    # для доступа с любого хоста
    fastapi.add_middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )

    # регистрация зависимости
    ioc.register(FastAPI, instance=fastapi)
