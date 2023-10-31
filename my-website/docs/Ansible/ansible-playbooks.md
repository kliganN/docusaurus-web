---
sidebar_position: 6
---

# Ansible. Playbooks

## Основные понятия

- **Playbook** - отдельный YAML-файл, который определяет набор действий (tasks) для выполнения на хостах
- **Play** - определяет, какие задачи будут выполнены на каких хостах
- **Task** - действие, которое необходимо выполнить на хосте. Задачи могут выполнять следующие действия:
    1. Выполнение команды
    2. Запуск скрипта
    3. Установка пакетов
    4. Выключение/Перезагрузка

## Пример плейбука

Взглянем на пример плейбука, написанного на YAML:

```yaml title="simple-playbook.yml"
---
- name: Пример плейбука
  hosts: localhost
  become: true   # become нужен для того, чтобы выполнять команды от sudo с паролем от SSH
  tasks:
    - name: Выполнить команду "date"
      command: date

    - name: Запустить скрипт на сервере
      script: test_script.sh

    - name: Установить сервис httpd
      yum:
        name: httpd
        state: present

    - name: Запустить веб-сервер
      service:
        name: httpd
        state: started
```

## Запуск плейбука

Чтобы запустить плейбук, используйте команду `ansible-playbook`:

```bash
ansible-playbook simple-playbook.yml -kK -i inventory
```

**Опции `-kK` используются для ввода пароля SSH и sudo, а `-i` используется для выбора инвертарного файла.**