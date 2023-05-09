const express = require('express');

const routes = express.Router();
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const { handleNotFoundUrl, handleErrors } = require('../middlewares/errors');

// registration route
routes.post('/signup', express.json(), createUser);
// authorization route
routes.post('/signin', express.json(), login);

routes.use(auth);

// inner routes
routes.use('/users', usersRoutes);
routes.use('/movies', moviesRoutes);
routes.use(handleNotFoundUrl);

// handler common errors
routes.use(handleErrors);

module.exports = routes;
