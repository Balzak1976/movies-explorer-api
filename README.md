# movies-explorer-api
Ссылки на проект: https://api.skor.nomoredomains.monster

## Описание и функциональность проекта

###   Backend
- Был создан сервер на express.
- Подключена база данных MongoDB, созданы схемы и модели ресурсов API. 
- Реализованы механизмы логирования, аутентификации и авторизации на сервере.
- Бэкенд задеплоен на виртуальную машину.


## Стэк технологий

| <a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="45" /></a> | <a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="45" /></a> | <a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="45" /></a> |
| :---: | :---: | :---: |
| Express | Node.js | MongoDB |

<br>


## Запуск проекта в режиме production

клонировать репозиторий на удаленную ВМ
  
```javascript
git clone https://github.com/Balzak1976/movies-explorer-api
```
установить зависимости

```javascript
npm ci 
```

создать файл `.env` в корне проекта

```javascript
PORT = 3000
MONGO_URL = 'mongodb://0.0.0.0:27017/bitfilmsdb'
JWT_SECRET='some-key'
```
запустить

```javascript
npm run start 
```
