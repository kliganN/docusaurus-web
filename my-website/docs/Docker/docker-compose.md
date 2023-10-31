---
sidebar_position: 11
---

# Docker Compose

:::tip Что такое Docker compose?
Docker Compose - это инструмент для определения и запуска Docker-контейнеров с несколькими сервисами. Он позволяет определить конфигурацию для всех сервисов в одном файле, а затем запустить их одной командой.
:::

## Пример использования Docker Compose

Для запуска нескольких сервисов в одном контейнере с помощью Docker Compose, необходимо определить конфигурацию в файле `docker-compose.yml`. Например, для запуска сервисов Redis, PostgreSQL, web и backweb можно использовать следующую конфигурацию:

```yaml
version: '2'

services:
  redis:
    image: redis

  db:
    image: postgres:9.4

  web:
    image: foot-app
    ports:
      - "3000:80"
    depends_on:
      - redis

  backweb:
    image: backfoot-app
    ports:
      - "3001:80"
    depends_on:
      - db

  worker:
    image: worker
    depends_on:
      - redis
      - db
```

В этом примере `services` определяет список сервисов, которые будут запущены в контейнере. Каждый сервис определяется как отдельный блок, содержащий информацию об образе Docker, портах и зависимостях.

Для запуска контейнеров с использованием Docker Compose выполните следующую команду:

```bash
docker-compose up -d
```
В этой команде `-d` означает запуск контейнеров в фоновом режиме.