const NotFoundError = require('./NotFoundError');
const ConflictError = require('./ConflictError');
const {
  OK,
  AUTH_EMAIL_EXISTS_MSG,
  MONGO_DUPLICATE_KEY,
} = require('../utils/constants');

// =============================================================================

const handleNotFoundError = (data, res, message) => {
  if (!data) {
    return Promise.reject(new NotFoundError(message));
  }
  return res.status(OK).send(data);
};

const handleConflictError = (err, next) => {
  if (err.code === MONGO_DUPLICATE_KEY) {
    return next(new ConflictError(AUTH_EMAIL_EXISTS_MSG));
  }
  return next(err);
};

module.exports = { handleNotFoundError, handleConflictError };
