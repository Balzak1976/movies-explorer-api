const http2 = require('node:http2');
const bcrypt = require('bcrypt');

const { handleNotFoundError, handleConflictError } = require('../errors/handlers');
const { createToken } = require('../utils/jwt');
const User = require('../models/user');

const OK = http2.constants.HTTP_STATUS_OK; // 200
const CREATED = http2.constants.HTTP_STATUS_CREATED; // 201
const salt = 10;
const userNotFoundMsg = 'Пользователь по указанному _id не найден.';

// POST /signup
const createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  // хэшируем пароль
  bcrypt.hash(password, salt)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      const userNoPassword = user.toObject();
      delete userNoPassword.password;

      return res.status(CREATED).send(userNoPassword);
    })
    .catch((err) => handleConflictError(err, next));
};

// POST /signin
const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = createToken({ _id: user.id });

      return res.status(OK).send({ token });
    })
    .catch(next);
};

// GET /users/me
const getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(OK).send(user))
    .catch(next);
};

// PATCH /users/me
const updateUser = (req, res, next) => {
  const { _id: id } = req.user;
  const { email, name } = req.body;

  User.findByIdAndUpdate(id, { email, name }, { new: true, runValidators: true })
    .then((user) => handleNotFoundError(user, res, userNotFoundMsg))
    .catch((err) => handleConflictError(err, next));
};

module.exports = {
  createUser, login, getUser, updateUser,
};
