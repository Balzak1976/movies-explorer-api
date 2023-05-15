const { celebrate, Joi } = require('celebrate');
const { passRegExp } = require('../utils/regExp');
const { USER_VALIDATOR_MSG } = require('../utils/constants');

// =============================================================================

const userCreateValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(USER_VALIDATOR_MSG.EMAIL),
    password: Joi.string()
      .min(8)
      .required()
      .pattern(passRegExp)
      .message(USER_VALIDATOR_MSG.PASS_REG_EXP)
      .messages(USER_VALIDATOR_MSG.PASSWD),
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .messages(USER_VALIDATOR_MSG.NAME),
  }),
});

const userLoginValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(USER_VALIDATOR_MSG.EMAIL),
    password: Joi.string().required().messages(USER_VALIDATOR_MSG.PASSWD),
  }),
});

const userUpdateValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().messages(USER_VALIDATOR_MSG.EMAIL),
    name: Joi.string().min(2).max(30).messages(USER_VALIDATOR_MSG.NAME),
  }),
});

module.exports = {
  userCreateValidate,
  userLoginValidate,
  userUpdateValidate,
};
