const { celebrate, Joi } = require('celebrate');

const { urlRegExp } = require('../utils/regExp');

const movieValidate = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages({
      'string.empty': 'Поле "country" должно быть заполнено',
    }),
    director: Joi.string().required().messages({
      'string.empty': 'Поле "director" должно быть заполнено',
    }),
    duration: Joi.number().required().messages({
      'string.empty': 'Поле "duration" должно быть заполнено',
    }),
    year: Joi.string().required().messages({
      'string.empty': 'Поле "year" должно быть заполнено',
    }),
    description: Joi.string().required().messages({
      'string.empty': 'Поле "description" должно быть заполнено',
    }),
    image: Joi.string()
      .required()
      .pattern(urlRegExp)
      .message('Введите URL')
      .messages({
        'string.empty': 'Поле "image" должно быть заполнено',
      }),
    trailerLink: Joi.string()
      .required()
      .pattern(urlRegExp)
      .message('Введите URL')
      .messages({
        'string.empty': 'Поле "trailerLink" должно быть заполнено',
      }),
    thumbnail: Joi.string()
      .required()
      .pattern(urlRegExp)
      .message('Введите URL')
      .messages({
        'string.empty': 'Поле "thumbnail" должно быть заполнено',
      }),
    movieId: Joi.string().required().hex().length(24)
      .messages({
        'string.empty': 'Поле "movieId" должно быть заполнено',
        'string.hex': 'Поле "movieId" должно быть шестнадцатеричным числом',
        'string.length': 'Поле "movieId" должно быть 24 симв.',
      }),
    nameRU: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "nameRU" должно быть заполнено',
      }),
    nameEN: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "nameEN" должно быть заполнено',
      }),
  }),
});

const movieIdValidate = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});

module.exports = { movieValidate, movieIdValidate };
