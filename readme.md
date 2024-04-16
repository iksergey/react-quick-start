# Пример React Приложения

Это простое React приложение, демонстрирующее основные принципы работы с компонентами и запросами к API. Приложение загружает данные с [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) и отображает первые 5 постов в виде карточек с картинками.

## Установка

1. Клонируйте репозиторий на свой компьютер:

```bash
git clone https://github.com/iksergey/api-explorer-hub.git
```

2. Перейдите в директорию проекта:

```bash
cd api-explorer-hub
```

3. Установите зависимости:

```bash
npm install
```

## Запуск

После установки зависимостей, запустите приложение:

```bash
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Структура проекта

- `src/components`: Директория содержит компоненты приложения.
  - `HeaderItem.js`: Компонент заголовка.
  - `FooterItem.js`: Компонент подвала.
  - `ContentItem.js`: Компонент контента.
- `Layout/HomePage/HomePage.jsx`: Главный компонент приложения 
- `src/index.js`: Входная точка приложения.

## Как это работает

Приложение загружает данные с API [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) с использованием библиотеки `axios`. Затем отображает первые 5 постов на главной странице в виде карточек с изображениями. Изображения берутся с [https://picsum.photos](https://picsum.photos)

## Технологии

- React
- JavaScript
- Axios
- HTML/CSS

## Вклад

Если вы хотите внести свой вклад в проект, пожалуйста, отправьте `pull request`.
