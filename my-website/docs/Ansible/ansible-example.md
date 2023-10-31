---
sidebar_position: 9
---

# Ansible. Пример

## Установка и настройка агента передачи почты Postfix с помощью Ansible

## Шаг 1: Создание файла hosts

Создадим файл `hosts` и добавим в него группы и хосты:

```bash title="hosts"
[web]
node1
node2

[database]
node3
```

## Шаг 2: Создание плейбука

Создадим новый плейбук `extended_services.yml` для установки и настройки Postfix и PostgreSQL на удаленных хостах:

```yaml title="extended_services.yml"
---
- name: Install extended services
  hosts: all
  become: true
  tasks:
    - name: Install Postfix
      package:
        name: postfix
        state: latest
      when: inventory_hostname in groups["web"]

    - name: Install PostgreSQL
      package:
        name: postgresql
        state: latest
      when: inventory_hostname in groups["database"]
```

В первой задаче мы устанавливаем Postfix на хосты, которые находятся в группе `web`. Во второй задаче мы устанавливаем PostgreSQL на хосты, которые находятся в группе `database`.

Обратите внимание на использование переменной Ansible fact `inventory_hostname`, которая используется в условном выражении `when` для указания конкретных групп, в которых должна выполняться задача.

## Шаг 3: Запуск плейбука

Запустим плейбук с помощью команды `ansible-navigator run extended_services.yml`. Когда плейбук выполнится успешно, проверим, что Postfix и PostgreSQL установлены на соответствующих хостах.

Таким образом, мы успешно использовали Ansible для установки и настройки агента передачи почты Postfix на удаленных хостах.