---
sidebar_position: 15
---

# Ansible. Условия. Примеры

## Примеры

В этом примере плейбук определяет переменную `age` и выполняет два задания, которые выводят на экран "I am a child" и "I am an adult". Для выполнения заданий в зависимости от значения переменной `age` используются условия `when`. Если `age` меньше 18, то выполняется первое задание, а если `age` больше или равно 18, то выполняется второе задание.


## Плейбук для определения, является ли человек взрослым или ребенком
```yaml title="condition-example1.yml"
- name: 'Am I an Adult or a Child?'
  hosts: localhost
  vars:
    age: 25
  tasks:
    - command: 'echo "I am a Child"'
      when: 'age < 18'
    - command: 'echo "I am an Adult"'
      when: 'age >= 18'
```

В следующем примере плейбук проверяет, есть ли запись для заданного DNS-сервера в файле `/etc/resolv.conf`. Если записи нет, то добавляет ее. Для этого используется условие `when`, которое проверяет вывод команды `cat /etc/resolv.conf` и ищет строку с заданным DNS-сервером.


## Плейбук для добавления записи для DNS-сервера в файл /etc/resolv.conf
```yaml title="condition-example2.yml"
- name: 'Add name server entry if not already entered'
  hosts: localhost
  tasks:
    - shell: 'cat /etc/resolv.conf'
      register: command_output
    - shell: 'echo "nameserver 10.0.250.10" >> /etc/resolv.conf'
      when: 'command_output.stdout.find("10.0.250.10") == -1'
```