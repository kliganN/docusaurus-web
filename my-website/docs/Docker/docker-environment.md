---
sidebar_position: 14
---

# Docker. Среда выполнения

## Docker среда выполнения

Docker среда выполнения состоит из нескольких компонентов:

1. Docker Engine - основной компонент, который управляет контейнерами.
2. Docker CLI - утилита командной строки для управления Docker.
3. REST API - API для управления Docker.
4. Docker daemon - фоновый процесс, который управляет объектами Docker, такими как образы, тома и сети.

## Docker Host

Для запуска контейнеров Docker на удаленном хосте можно использовать опцию `-H` в команде `docker`. Например:

```bash
docker -H=remote-docker-engine:5478
docker -H=10.10.10.1:5478 run nginx
```

## Namespace

Docker использует namespace для изоляции контейнеров от других процессов на хосте. Например, для запуска процессов в namespace контейнера можно использовать команду `docker run -it alpine ps aux`.

## Ограничение аппаратных ресурсов

Для ограничения использования аппаратных ресурсов контейнерами Docker можно использовать опции `--cpus` и `--memory`. Например:

```bash
docker run --cpus=.5 nginx
docker run --memory=100m nginx
```

## Пример использования namespace и запуска контейнера

Для запуска контейнера с ограничением памяти в 100 МБ можно использовать следующую команду:

```bash
docker run -d --memory=100mb --name alpine-100mb alpine top
```

Для проверки использования ресурсов контейнера можно использовать команду `docker stats --no-stream`.

Для запуска контейнера в namespace другого контейнера можно использовать опцию

`--net=container`. Например:

```bash
docker run -d --name=http nginx:alpine
docker run --net=container:http benhall/curl curl -s localhost
```

Для просмотра процессов в namespace контейнера можно использовать опцию 

`--pid=container`. Например:

```bash
docker run --pid=container:http alpine ps aux
```