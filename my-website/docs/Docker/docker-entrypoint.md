---
sidebar_position: 10
---

# Docker. Entrypoint

## Command и Entrypoint

Команды `CMD` и `ENTRYPOINT` определяют, какая команда должна быть выполнена при запуске контейнера. Команда `CMD` задает аргументы по умолчанию для выполняемой команды, а `ENTRYPOINT` задает команду, которая будет выполнена при запуске контейнера.

## Пример использования CMD

Для создания своего Docker-образа на основе образа Ubuntu, можно использовать инструкцию `CMD` в Dockerfile. Например, чтобы создать образ, который будет выполнять команду `sleep 10` при запуске контейнера, выполните следующий Dockerfile:

```bash
FROM Ubuntu

CMD ["sleep", "10"]
```

В этом примере `FROM` указывает на базовый образ, а `CMD` задает команду, которая будет выполняться при запуске контейнера. В данном случае, команда `sleep 10` будет выполнена при запуске контейнера.

## Пример использования ENTRYPOINT

Для создания Docker-образа, который будет выполнять команду `sleep` при запуске контейнера, можно использовать инструкцию `ENTRYPOINT` в Dockerfile. Например, чтобы создать образ, который будет выполнять команду `sleep` c параметром по умолчанию 10 при запуске контейнера, выполните следующий Dockerfile:

```bash
FROM Ubuntu

ENTRYPOINT ["sleep"]

CMD ["10"]
```

В этом примере `FROM` указывает на базовый образ, а `ENTRYPOINT` задает команду, которая будет выполнена при запуске контейнера. В данном случае, команда `sleep` будет выполнена при запуске контейнера, а параметр `10` будет передан в качестве аргумента команды по умолчанию.

## Использование команды при запуске контейнера

Для изменения параметра команды при запуске контейнера, можно использовать аргументы командной строки. Например, чтобы изменить время ожидания на `10` секунд, выполните следующую команду:

```bash
docker run ubuntu-sleep 10
```

В этом примере `ubuntu-sleep` указывает на имя Docker-образа, а `10` передается в качестве параметра команды.