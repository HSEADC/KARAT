# ЗАГРАНЬ

Медиа о поступлении в зарубежные вузы: каталог из 141 вуза в 70 странах, статьи, словарь терминов и тесты.
Авторы: Кристина Фатикова, Валерия Шиян.

## Команды

```bash
yarn            # установить зависимости
yarn start      # сборка в docs/ и локальный сервер с автообновлением: http://localhost:5173
yarn watch      # сборка в docs/ с пересборкой при каждом изменении
yarn build      # итоговая сборка в docs/
yarn preview    # посмотреть собранный docs/
```

## Сборка

- `vite.config.js` — корень проекта `src/`, сборка в `docs/`, список всех страниц (`pages`).
  Плагин `pageChunksPlugin` подключает к каждой странице `javascripts/index.js` и `javascripts/allStyles.js`.
- `postcss.config.js` — postcss-nested, postcss-preset-env, autoprefixer.
- `src/public/` копируется в билд как есть (фото, favicon).

## Структура

```
zagran/
├── package.json
├── vite.config.js
├── postcss.config.js
├── structure.md
├── src/
│   ├── index.html                 # главная
│   ├── pages/
│   │   ├── universities.html      # раздел «Вузы»
│   │   ├── university.html        # страница вуза (?id=…)
│   │   ├── articles.html          # раздел «Статьи»
│   │   ├── article.html           # шаблон статьи (?id=…)
│   │   ├── glossary.html          # раздел «Словарь»
│   │   ├── tests.html             # раздел «Тесты»
│   │   ├── compare.html           # сравнение вузов
│   │   ├── saved.html             # сохранённое
│   │   ├── about.html             # о нас
│   │   ├── articles/
│   │   │   └── free-europe.html   # пример статьи
│   │   └── tests/
│   │       ├── match.html         # тест «Подбор вуза»
│   │       └── quiz.html          # квиз
│   ├── stylesheets/               # fonts, reset, layout, style, adaptive
│   ├── javascripts/
│   │   ├── index.js               # точка входа: данные + логика
│   │   ├── allStyles.js           # подключает все стили
│   │   ├── app.js                 # логика страниц
│   │   └── data/                  # вузы, статьи, словарь, тесты
│   ├── fonts/                     # шрифты woff2
│   └── public/                    # images/, favicon.ico
└── docs/                          # собранный сайт
```

## Перелинковка

В каждой странице статичные шапка и подвал со ссылками на главную и все разделы.
Главная и раздел «Статьи» ведут на пример статьи `pages/articles/free-europe.html`, а статья ведёт обратно на главную и в разделы.
