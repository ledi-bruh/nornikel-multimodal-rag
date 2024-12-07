from pydantic_settings import BaseSettings, SettingsConfigDict

from src.shared.swagger.settings import SwaggerSettings

__all__ = [
    'Settings',
    'load_settings',
]


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file='.env',
        env_file_encoding='utf-8',
        env_nested_delimiter='__',
        extra='ignore',
        case_sensitive=False,
    )

    swagger: SwaggerSettings = SwaggerSettings()

    app_title: str = 'MultiModal RAG'
    app_host: str = '0.0.0.0'
    app_port: int = 8558
    qdrant_url: str
    qdrant_collection_name: str


# Функция для создания настроек (подгрузит данные из .env)
def load_settings() -> Settings:
    return Settings()
