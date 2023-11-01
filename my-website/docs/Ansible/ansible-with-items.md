---
sidebar_position: 17
---

# Ansible. with_items

## Ansible with_items. Примеры использования

В Ansible мы можем использовать директиву `with_items` для выполнения повторяющихся задач в цикле. Рассмотрим несколько примеров использования этой директивы.

В первом примере мы выводим список фруктов из переменной `fruits` с помощью команды `echo`. Чтобы вывести все фрукты из списка, мы можем применить директиву `with_items` в этом задании:


## Плейбук для вывода списка фруктов
```yaml
- name: Print list of fruits
  hosts: localhost
  vars:
    fruits:
      - Apple
      - Banana
      - Grapes
      - Orange
  tasks:
    - command: 'echo "{{ item }}"'
      with_items: '{{ fruits }}'
```

Во втором примере мы используем директиву `with_items` для установки нескольких пакетов с помощью модуля `yum`. Переменная `packages` содержит список пакетов, которые мы хотим установить на хосте. Директива `with_items` позволяет выполнить задачу с каждым элементом списка:


## Плейбук для установки нескольких пакетов с помощью модуля yum
```yaml
- name: Install required packages
  hosts: localhost
  vars:
    packages:
      - httpd
      - binutils
      - glibc
      - ksh
      - libaio
      - libXext
      - gcc
      - make
      - sysstat
      - unixODBC
      - mongodb
      - nodejs
      - grunt
  tasks:
    - yum:
        name: '{{ item }}'
        state: present
      with_items: '{{ packages }}'
```

В обоих примерах директива `with_items` позволяет нам выполнить одно и то же задание для каждого элемента списка. Это может существенно упростить автоматизацию процессов в IT-инфраструктуре и сократить время на выполнение задач.