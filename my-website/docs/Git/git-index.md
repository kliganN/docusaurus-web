---
sidebar_position: 7
---

# Git. Index, Staging area

## Непрослеживаемые файлы в Git

Когда вы создаете новый файл в вашем Git-репозитории, Git не отслеживает его автоматически. Такой файл называется непрослеживаемым файлом (untracked file). Чтобы добавить непрослеживаемые файлы в область подготовки (staging area), используйте команду `git add`.

Чтобы увидеть список непрослеживаемых файлов в вашем репозитории, используйте команду `git status`. Git выведет список непрослеживаемых файлов вместе с инструкцией о том, как добавить их в область подготовки.

Например, если вы создали новый файл с именем `new-file.js`, `git status` выведет следующее сообщение:

**INDEX AREA**

```bash
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        new-file.js
        src/test.js

nothing added to commit but untracked files present (use "git add" to track)
```

Чтобы добавить файл `new-file.js` в область подготовки(Stage Area), выполните команду `git add new-file.js`. После этого вы увидите, что файл попал в стадию подготовки:

**STAGING AREA**

```bash
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   new-file.js
```

Теперь файлы готовы для коммита в ваш репозиторий.

Если мы хотим изменить файл, меняем и появится окно:

```bash
Changes not staged for commit:

(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
       modified:   new-file.js
```

Тут он предлагает вернуть исходный код модифицированного файла или снова добавить его в **Staging Area** для последующего коммита.