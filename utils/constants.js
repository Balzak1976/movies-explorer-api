const http2 = require('node:http2');

// ============================ STATUSES =======================================

const OK = http2.constants.HTTP_STATUS_OK; // 200
const CREATED = http2.constants.HTTP_STATUS_CREATED; // 201
const UNAUTHORIZED = http2.constants.HTTP_STATUS_UNAUTHORIZED; // 401
const FORBIDDEN = http2.constants.HTTP_STATUS_FORBIDDEN; // 403
const NOT_FOUND = http2.constants.HTTP_STATUS_NOT_FOUND; // 404
const CONFLICT = http2.constants.HTTP_STATUS_CONFLICT; // 409
const SERVER_ERROR = http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR; // 500

// ====================== SERVER SENDING MESSAGES ==============================

const USER_NOT_FOUND_MSG = 'Пользователь по указанному _id не найден.';

const MOVIE_SUCCESS_DEL_MSG = 'Фильм успешно удалён';
const MOVIE_ID_NOT_FOUND_MSG = 'Фильм с указанным _id не найден';
const MOVIE_FORBIDDEN_DEL_MSG = 'Нет доступа на удаление чужого фильма';

const AUTH_EMAIL_EXISTS_MSG = 'Данный email уже зарегистрирован';
const AUTH_ERROR_DEMAND_MSG = 'Необходима авторизация';
const AUTH_ERROR_WRONG_CREDENTIALS_MSG = 'Неправильные почта или пароль';

const URL_NOT_FOUND_MSG = 'По указанному url ничего нет';
const SERVER_INTERNAL_ERROR_MSG = 'На сервере произошла ошибка';

// ======================== VALIDATOR MESSAGES =================================

const MOVIE_VALIDATOR_MSG = {
  COUNTRY: { 'string.empty': 'Поле "country" должно быть заполнено' },
  DIRECTOR: { 'string.empty': 'Поле "director" должно быть заполнено' },
  DURATION: { 'string.empty': 'Поле "duration" должно быть заполнено' },
  YEAR: { 'string.empty': 'Поле "year" должно быть заполнено' },
  DESCRIPTION: { 'string.empty': 'Поле "description" должно быть заполнено' },
  IMAGE: { 'string.empty': 'Поле "image" должно быть заполнено' },
  TRAILER: { 'string.empty': 'Поле "trailerLink" должно быть заполнено' },
  THUMBNAIL: { 'string.empty': 'Поле "thumbnail" должно быть заполнено' },
  MOVIE_ID: { 'string.empty': 'Поле "movieId" должно быть заполнено' },
  NAME_RU: { 'string.empty': 'Поле "nameRU" должно быть заполнено' },
  NAME_EN: { 'string.empty': 'Поле "nameEN" должно быть заполнено' },
  URL_REG_EXP: 'Введите URL',
};

const USER_VALIDATOR_MSG = {
  EMAIL: {
    'string.empty': 'Поле email должно быть заполнено',
    'string.email': 'Поле должно быть валидным email',
  },
  PASSWD: {
    'string.min': 'Пароль должен быть не короче 8 симв.',
    'string.empty': 'Поле "password" должно быть заполнено',
  },
  NAME: {
    'string.empty': 'Поле name должно быть заполнено',
    'string.min': 'Имя должно быть не короче 2 симв.',
    'string.max': 'Имя должно быть не длиннее 30 симв.',
  },
  PASS_REG_EXP: 'Пароль должен содержать a-z, A-Z, и 0-9',
};

// =============================================================================

const MONGO_DUPLICATE_KEY = 11000;
const SALT_BCRYPT = 10;
const ALLOWED_URL = [
  'http://localhost:3001',
  'https://skor.nomoredomains.monster',
  'https://api.nomoreparties.co',
];

module.exports = {
  OK,
  CREATED,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  SERVER_ERROR,
  USER_NOT_FOUND_MSG,
  MOVIE_SUCCESS_DEL_MSG,
  MOVIE_ID_NOT_FOUND_MSG,
  MOVIE_FORBIDDEN_DEL_MSG,
  AUTH_EMAIL_EXISTS_MSG,
  AUTH_ERROR_DEMAND_MSG,
  AUTH_ERROR_WRONG_CREDENTIALS_MSG,
  URL_NOT_FOUND_MSG,
  SERVER_INTERNAL_ERROR_MSG,
  MOVIE_VALIDATOR_MSG,
  USER_VALIDATOR_MSG,
  MONGO_DUPLICATE_KEY,
  SALT_BCRYPT,
  ALLOWED_URL,
};
