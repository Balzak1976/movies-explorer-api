const http2 = require('node:http2');
const NotFoundError = require('./NotFoundError');
const ConflictError = require('./ConflictError');

const OK = http2.constants.HTTP_STATUS_OK;

const handleNotFoundError = (data, res, message) => {
  if (!data) {
    return Promise.reject(new NotFoundError(message));
  }
  return res.status(OK).send(data);
};

const handleConflictError = (err, next) => {
  if (err.code === 11000) {
    return next(new ConflictError('Данный email уже зарегистрирован'));
  }
  return next(err);
};

module.exports = { handleNotFoundError, handleConflictError };
