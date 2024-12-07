from fastapi import FastAPI
import uvicorn

from .app import App
from .bootstrap import bootstrap
from .ioc import ioc
from .settings import load_settings


if __name__ == '__main__':
    settings = load_settings()  # загрузка настроек
    app = App()  # создание приложения

    bootstrap(app=app, settings=settings)  # сборка приложения

    try:
        # запуск приложения
        uvicorn.run(
            app=ioc.resolve(FastAPI),
            host=settings.app_host,
            port=settings.app_port,
        )
    except BaseException as e:
        print(f'{type(e)}: {e!s}.')
