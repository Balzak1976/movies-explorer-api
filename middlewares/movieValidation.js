const { celebrate, Joi } = require('celebrate');
const { urlRegExp } = require('../utils/regExp');
const { MOVIE_VALIDATOR_MSG } = require('../utils/constants');

// =============================================================================

const movieValidate = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages(MOVIE_VALIDATOR_MSG.COUNTRY),
    director: Joi.string().required().messages(MOVIE_VALIDATOR_MSG.DIRECTOR),
    duration: Joi.number().required().messages(MOVIE_VALIDATOR_MSG.DURATION),
    year: Joi.string().required().messages(MOVIE_VALIDATOR_MSG.YEAR),
    description: Joi.string().required().messages(MOVIE_VALIDATOR_MSG.DESCRIPTION),
    image: Joi.string()
      .required()
      .pattern(urlRegExp)
      .message(MOVIE_VALIDATOR_MSG.URL_REG_EXP)
      .messages(MOVIE_VALIDATOR_MSG.IMAGE),
    trailerLink: Joi.string()
      .required()
      .pattern(urlRegExp)
      .message(MOVIE_VALIDATOR_MSG.URL_REG_EXP)
      .messages(MOVIE_VALIDATOR_MSG.TRAILER),
    thumbnail: Joi.string()
      .required()
      .pattern(urlRegExp)
      .message(MOVIE_VALIDATOR_MSG.URL_REG_EXP)
      .messages(MOVIE_VALIDATOR_MSG.THUMBNAIL),
    movieId: Joi.number().required()
      .messages(MOVIE_VALIDATOR_MSG.MOVIE_ID),
    nameRU: Joi.string()
      .required()
      .messages(MOVIE_VALIDATOR_MSG.NAME_RU),
    nameEN: Joi.string()
      .required()
      .messages(MOVIE_VALIDATOR_MSG.NAME_EN),
  }),
});

const movieIdValidate = celebrate({
  params: Joi.object().keys({
    mongoId: Joi.string().required().hex().length(24),
  }),
});

module.exports = { movieValidate, movieIdValidate };
