const express = require('express');

const usersRoutes = express.Router();
const { getUser, updateUser } = require('../controllers/users');
const { userUpdateValidate } = require('../validation/user');

// =============================================================================

// возвращает информацию о пользователе (email и имя)
// GET /users/me
usersRoutes.get('/me', getUser);

// обновляет информацию о пользователе (email и имя)
// PATCH /users/me
usersRoutes.patch('/me', express.json(), userUpdateValidate, updateUser);

module.exports = usersRoutes;
