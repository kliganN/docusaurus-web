---
sidebar_position: 10
---

# Ansible. Пример №2

## Создание трех пользователей на удаленном хосте с помощью Ansible

## Шаг 1: Создание плейбука

Откройте вкладку редактора и создайте файл `loop_users.yml`. Внутри файла добавьте следующее содержимое:

```yaml title="loop_users.yml"
---
- name: Create users
  hosts: node1
  become: true
  tasks:
    - name: Create three users are present
      user:
        name: "{{ item }}"
        state: present
      loop:
         - dev_user
         - qa_user
         - prod_user
```

В этом плейбуке мы используем модуль `ansible.builtin.user` для создания пользователей на хосте `node1`. Обратите внимание на использование переменной `{{ item }}` в параметре `name`, которая будет заменена значениями, найденными в инструкции `loop`.

## Шаг 2: Запуск плейбука

Запустите плейбук с помощью команды `ansible-navigator run loop_users.yml`. Когда плейбук выполнится успешно, проверьте, что три пользователя `dev_user`, `qa_user` и `prod_user` были созданы на удаленном хосте.

Таким образом, мы успешно использовали Ansible для создания трех пользователей на удаленном хосте с помощью модуля `ansible.builtin.user` и инструкции `loop`.