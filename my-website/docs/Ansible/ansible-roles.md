---
sidebar_position: 18
---

# Ansible. Roles

**Чтобы не создавать слишком большие плейбуки в Ansible, их можно разделить на несколько маленьких, используя директиву `include`, которая позволяет подключать другие файлы в основной плейбук. Плейбуки в Ansible обычно делятся на 4 класса:**

- **Packages**
- **Modules**
- **Classes**
- **Functions**

Для того, чтобы упростить структуру и поддержку плейбука, можно создать отдельные файлы для задач и переменных и подключать их в основном плейбуке с помощью директив `vars_files` и `include`. Например, для задач и переменных можно создать файлы `tasks.yml` и `vars.yml` со следующим содержимым:


```yaml title="vars.yml"
http_port: 8081
snmp_port: 160-161
```

```yaml title="tasks.yml"
- firewalld:
    port: '{{ http_port }}/tcp'
```

Затем их можно подключить в основном плейбуке следующим образом:

```yaml
vars_files:
  - vars.yml

tasks:
  - include: tasks.yml
```

В Ansible Galaxy собрано множество ролей и тасков для автоматизации различных задач. Их можно использовать для общения с сообществом и использования best practices. При создании собственной роли можно использовать команду `ansible-galaxy init` для создания структуры каталогов с файлами для задач, переменных и др. Например, команда `ansible-galaxy init mysql-role` создаст следующую структуру каталогов для роли:

```yaml
mysql-role
  README.md
  templates
  tasks
  handlers
  vars
  defaults
  meta
```

Если ролей в каталоге нет, Ansible ищет их по умолчанию в `/etc/ansible/roles`.