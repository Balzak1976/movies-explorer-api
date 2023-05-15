const NotFoundError = require('../errors/NotFoundError');
const { SERVER_ERROR, URL_NOT_FOUND_MSG, SERVER_INTERNAL_ERROR_MSG } = require('../utils/constants');

// =============================================================================

const handleNotFoundUrl = (req, res, next) => {
  next(new NotFoundError(URL_NOT_FOUND_MSG));
};

const handleErrors = (err, req, res, next) => {
  const { statusCode = SERVER_ERROR, message } = err;

  res.status(statusCode).send({
    message: statusCode === SERVER_ERROR
      ? SERVER_INTERNAL_ERROR_MSG
      : message,
  });

  next();
};

module.exports = { handleNotFoundUrl, handleErrors };
