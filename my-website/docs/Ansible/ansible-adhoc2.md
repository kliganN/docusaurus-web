---
sidebar_position: 5
---

# Ansible. Ad-Hoc команды-2

В этой заметке мы рассмотрим несколько полезных Ad-Hoc модулей в Ansible и их использование:

- `url`: Загрузка файлов или ссылок через HTTP, HTTPS или FTP.
- `file`: Управление файлами и директориями на удаленных хостах.
- `service`: Управление сервисами на удаленных хостах.

## Модуль url

Ansible модуль `url` позволяет скачивать файлы или ссылки через HTTP, HTTPS или FTP. Пример использования:

```bash
ansible localhost -m url -a "url=https://example.com/path/to/file.txt dest=/tmp/file.txt"
```

**Опции:**

- `url`: URL-адрес файла или ссылки для загрузки.
- `dest`: Путь, куда будет скачан файл на удаленном хосте.

## Модуль file

Ansible модуль `file` позволяет управлять файлами и директориями на удаленных хостах. Примеры использования:

```bash
ansible localhost -m file -a "path=/tmp/file.txt state=absent"
ansible localhost -m file -a "path=/tmp/dir state=directory mode=0755"
```

**Опции:**

- `path`: Путь к файлу или директории на удаленном хосте.
- `state`: Ожидаемое состояние файла (absent, file, directory, link, etc.).
- `mode`: Права доступа для файла или директории (в формате POSIX, как `0755`).

## Модуль service

Ansible модуль `service` позволяет управлять сервисами на удаленных хостах. Примеры использования:

```bash
ansible localhost -m service -a "name=nginx state=started"
ansible localhost -m service -a "name=nginx state=stopped"
ansible localhost -m service -a "name=nginx state=restarted"
```

**Опции:**

- `name`: Название сервиса на удаленном хосте.
- `state`: Ожидаемое состояние сервиса (started, stopped или restarted).

:::tip Итоги
Модули `url`, `file` и `service` делают Ansible удобным инструментом для выполнения разных задач на удаленных хостах. В зависимости от модуля и его опций, возможности применения данного инструмента могут значительно разнообразиться, облегчая работу разработчикам и системным администраторам.
:::