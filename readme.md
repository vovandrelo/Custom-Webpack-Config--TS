## Описание проекта
Проект представляет собой собственную сборку с описанием каждой опции для TS-проектов.

## Основные сведения о WebPack
Webpack - сборщик модулей, который используется для компиляции JS-модулей в один или несколько пакетов. 

### Установка
Webpack:
- npm install webpack --save-dev
Webpack CLI (инструмент для работы с WebPack из командной строки):
- npm install webpack-cli --save-dev

### Структура проекта
- Папка dist(distribution) - это свернутый и оптимизированный результат сборки, который в конечном итоге будет загружен в браузер;
- Папка src(source) - набор исходных файлов, с которыми ведётся разработка и из которых формируется финальный bundle.

### Импорты
Есть некоторые браузеры, которые не распознают новый синтаксис import/export, поэтому, webpack по-умолчанию конвертирует код, чтобы старые браузеры также могли его запускать. Обратите внимание, что webpack не изменит никакой код, кроме инструкций импорта и экспорта.

### Файл конфигурации
Webpack работает совместно с файлами конфигурации - файлами, которые содержат настройку сборки проекта.
Для запуска сборки с указанным файлом конфигурации используется команда:
- npx webpack --config webpack.config.js
Если файл webpack.config.js присутствует, команда webpack выбирает его по умолчанию (то есть можно было бы обойтись npx webpack). Параметр --config используется здесь только для того, чтобы показать, что вы можете передать конфигурацию с любым именем. Это будет полезно для более сложных конфигураций, которые необходимо разделить на несколько файлов.

## Запуск
Для запуска необходимых сборок необходимо обратиться к скриптам в package.json.
Внутри скриптов package.json. используется библиотека cross-env, которая указывает системе в каком режиме (dev/prod) была запущена сброка.