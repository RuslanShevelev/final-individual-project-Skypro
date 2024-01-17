# Дипломный проект "сайт онлайн объявлений, аналогичный "Авито"

Пприложение для просмотра, размещения и редактирования объявлений, с возможностью добавления, удаления фотографий товара, а также добавления отзывов.

Для запуска backend-части необходимо установить Docker, написать в терминале команду:

`docker compose -f docker-compose-backend.yaml up -d`

Чтобы остановить работу бэкенда выполните:

`docker-compose down`

Для установки зависимостей:
`npm install`

Для запуска проекта выполните команду:
`npm start`

Проект будет доступен по адресу: http://localhost:3000

Backend доступен по адресу: http://127.0.0.1:8090. API - Swagger.

## Язык и cторонние библиотеки:
- JavaScript
- React
- React-router-dom
- Redux toolkit
- RTK Query
- Eslint
- Prettier
- date-fns
- react-loading-skeleton
- sass