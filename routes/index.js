const express = require('express');
const { errors } = require('celebrate');

const routes = express.Router();
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const { handleNotFoundUrl, handleErrors } = require('../middlewares/errors');
const { limiter } = require('../middlewares/limiter');
const { userLoginValidate, userCreateValidate } = require('../middlewares/userValidation');
const { requestLogger, errorLogger } = require('../middlewares/logger');

// =============================================================================

// логирование запросов
routes.use(requestLogger);

// чтобы число запросов с одного IP в единицу времени было ограничено.
routes.use(limiter);

// registration route
routes.post('/signup', express.json(), userCreateValidate, createUser);
// authorization route
routes.post('/signin', express.json(), userLoginValidate, login);

routes.use(auth);

// inner routes
routes.use('/users', usersRoutes);
routes.use('/movies', moviesRoutes);
routes.use(handleNotFoundUrl);

// логирование ошибок
routes.use(errorLogger);

// handler celebrate validator
routes.use(errors());
// handler common errors
routes.use(handleErrors);

module.exports = routes;
