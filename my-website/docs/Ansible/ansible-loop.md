---
sidebar_position: 16
---

# Ansible. Loop

Представим, что нам нужно создать пользователя в системе с помощью Ansible. В простом случае, мы можем использовать модуль `user`, чтобы создать пользователя с заданным именем. Вот так выглядит плейбук для создания пользователя `Boris`:


## Плейбук для создания пользователя в системе
```yaml
- name: create users
  hosts: localhost
  tasks:
    - user: name=Boris state=present
```

Если нам нужно создать несколько пользователей, то мы можем создать список `loop`, и перечислить все имена пользователей в этом списке:


## Плейбук для создания нескольких пользователей в системе
```yaml
- name: create users
  hosts: localhost
  tasks:
    - user: name='{{ item }}' state=present
      loop:
        - Boris
        - David
        - Gordon
        - Tony
```

Если нам нужно добавить несколько свойств для каждого пользователя, мы можем использовать словарь `dictionary`. В этом случае, мы должны использовать имя свойства, например `item.name` и `item.uid`:


## Плейбук для создания пользователей с несколькими свойствами
```yaml
- name: create users
  hosts: localhost
  tasks:
    - user: name='{{ item.name }}' state=present uid='{{ item.uid }}'
      loop:
        - { name: Boris, uid: 1010 }
        - { name: David, uid: 1011 }
        - { name: Gordon, uid: 1012 }
        - { name: Tony, uid: 1013 }
```

Мы также можем использовать короткий синтаксис для создания списка словарей:

## Плейбук для создания пользователей с несколькими свойствами (сокращенный синтаксис)
```yaml
- name: create users
  hosts: localhost
  tasks:
    - user: name='{{ item.name }}' state=present uid='{{ item.uid }}'
      loop:
        - { name: Boris, uid: 1010 }
        - { name: David, uid: 1011 }
        - { name: Gordon, uid: 1012 }
        - { name: Tony, uid: 1013 }
```

**Ansible** также предоставляет несколько встроенных функций для работы с различными типами данных. Например, мы можем использовать функцию `with_items` для выполнения задания со списком, или функцию `with_file` для выполнения задания с файлом:


## Плейбук для выполнения задания со списком
```yaml
- name: Install packages with items
  hosts: localhost
  tasks:
    - yum:
        name: "{{ item }}"
        state: present
      with_items:
        - httpd
        - libaio
        - make
```
## Плейбук для выполнения задания с файлом
```yaml
- name: Copy file to hosts
  hosts: all
  tasks:
    - copy:
        src: "{{ item }}"
        dest: "/tmp/"
      with_file:
        - "/etc/hosts"
        - "/etc/resolv.conf"
```
:::note
В дополнение к этому, Ansible также предоставляет функции для работы с базами данных, такими как `with_mongodb`, которая может быть использована для выполнения заданий с MongoDB.
:::