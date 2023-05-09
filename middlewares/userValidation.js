const { celebrate, Joi } = require('celebrate');

const { passRegExp } = require('../utils/regExp');

const userCreateValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'string.empty': 'Поле email должно быть заполнено',
      'string.email': 'Поле должно быть валидным email',
    }),
    password: Joi.string()
      .min(8)
      .required()
      .pattern(passRegExp)
      .message('Пароль должен содержать a-z, A-Z, и 0-9')
      .messages({
        'string.min': 'Пароль должен быть не короче 8 симв.',
        'string.empty': 'Поле "password" должно быть заполнено',
      }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.empty': 'Поле name должно быть заполнено',
        'string.min': 'Имя должно быть не короче 2 симв.',
        'string.max': 'Имя должно быть не длиннее 30 симв.',
      }),
  }),
});

const userLoginValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'string.empty': 'Поле email должно быть заполнено',
      'string.email': 'Поле должно быть валидным email',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Поле пароля должно быть заполнено',
    }),
  }),
});

const userUpdateValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().messages({
      'string.empty': 'Поле email должно быть заполнено',
      'string.email': 'Поле должно быть валидным email',
    }),
    name: Joi.string().min(2).max(30)
      .messages({
        'string.empty': 'Поле "name" должно быть заполнено',
        'string.min': 'Имя должно быть не короче 2 симв.',
        'string.max': 'Имя должно быть не длиннее 30 симв.',
      }),
  }),
});

module.exports = {
  userCreateValidate,
  userLoginValidate,
  userUpdateValidate,
};
