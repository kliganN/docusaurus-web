---
sidebar_position: 12
---

# Git. Процесс слияния веток

## Процесс слияния веток в Git

В Git слияние веток позволяет объединить изменения, внесенные в одну ветку, с изменениями, внесенными в другую ветку. Вот простой процесс слияния веток в Git:

1. Находясь в ветке main, создайте новую ветку features:
    
    ```bash
    git branch features
    ```
    
2. Перейдите в новую ветку:
    
    ```bash
    git checkout features
    ```
    
3. Внесите необходимые изменения в файлы вашего проекта, добавив или изменив пару файлов:
    
    ```bash
    // изменяем файл example.txt
    echo "Hello, world!" > example.txt
    
    // добавляем новый файл
    touch newfile.txt
    ```
    
4. Сделайте коммит в ветке `features`:
    
    ```bash
    git add .
    git commit -m "add example and newfile txt"
    ```
    
5. Вернитесь в основную ветку `main`:
    
    ```bash
    git checkout main
    ```
    
6. Внесите изменения в файлы вашего проекта в ветке `main`, добавив, например, [README.md](http://readme.md/):
    
    ```bash
    echo "# My Project" > README.md
    ```
    
7. Сделайте коммит в ветке `main`:
    
    ```bash
    git add .
    git commit -m "add README.md"
    ```
    
8. Сделайте слияние ветки `features` в ветку `main`:

```bash
git merge features
```

После этого можно удалить ветку **features.** 

```bash
git branch -d features
```

`Git` автоматически объединит изменения в ветке features с изменениями в ветке main и создаст новый коммит с объединенными изменениями.

Если во время слияния возникают конфликты, Git может попросить вас разрешить эти конфликты перед продолжением процесса слияния.