---
sidebar_position: 13
---

# Docker Compose. Команды

## Команды Docker Compose

Для работы с Docker Compose можно использовать несколько команд:

- `docker-compose up -d` - разворачивает контейнеры, определенные в файле `docker-compose.yml`, в фоновом режиме.
- `docker-compose down` - останавливает и удаляет контейнеры, определенные в файле `docker-compose.yml`.
- `docker-compose ps` - показывает список контейнеров, определенных в файле `docker-compose.yml`.
- `docker-compose logs` - выводит логи всех сервисов в стеке.
- `docker-compose up -d --scale vote=3` - управляет масштабированием сервиса `vote` до 3 реплик.

## Пример создания контейнера базы данных PostgreSQL

Для создания контейнера базы данных PostgreSQL с именем `db` и переменной окружения `POSTGRES_PASSWORD=mysecretpassword` можно использовать следующую команду:

```bash
docker run --name db -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

Эта команда создаст контейнер PostgreSQL, запущенный в фоновом режиме, с именем `db`. Опция `-e` позволяет задать переменную окружения `POSTGRES_PASSWORD`, которая необходима для безопасной работы с базой данных.

:::warning
Обратите внимание, что для работы с базой данных из других контейнеров необходимо использовать механизмы Docker networking, которые позволяют организовать связь между контейнерами. Это можно сделать, например, с помощью Docker Compose.
:::