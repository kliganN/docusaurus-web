---
sidebar_position: 5
---

# Git. Команды

- `git init`: создает новый репозиторий Git в текущей директории.
- `git clone [url]`: клонирует существующий репозиторий Git на локальный компьютер.
- `git add [file]`: добавляет изменения в файле или директории в индекс.
- `git commit -m "message"`: создает новый коммит с изменениями из индекса и сообщением коммита.
- `git push [remote] [branch]`: отправляет изменения в локальном репозитории на удаленный репозиторий.
- `git pull [remote] [branch]`: получает изменения из удаленного репозитория и объединяет их с локальными изменениями.
- `git status`: показывает текущий статус изменений в локальном репозитории.
- `git log`: показывает историю коммитов в локальном репозитории.
- `git branch`: показывает список доступных веток и текущую активную ветку. При добавлении имени создает новую ветку. `git branch [name]`
- `git checkout [branch]`: переключается на указанную ветку.
- `git merge [branch]`: объединяет указанную ветку с текущей активной веткой.
- `git remote add [name] [url]`: добавляет новый удаленный репозиторий с указанным именем и URL.
- `git stash`: скрывает текущие изменения в наборе изменений, который можно применить позднее.
- `git cherry-pick [commit]`: применяет изменения из указанного коммита к текущей активной ветке.
- `git cat-file -p [hash]`: позволяет прочесть содержимое файла объекта Git.
- `git cat-file -t [hash]`: позволяет прочесть тип файла Git.


:::tip
Это лишь некоторые из многих команд Git, которые могут быть полезны в повседневной работе с Git. Я надеюсь, что эта заметка будет полезна для вас в использовании Git.
:::