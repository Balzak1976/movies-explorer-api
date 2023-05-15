const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { AUTH_ERROR_WRONG_CREDENTIALS_MSG } = require('../utils/constants');

// =============================================================================

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function foo(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(AUTH_ERROR_WRONG_CREDENTIALS_MSG));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError(AUTH_ERROR_WRONG_CREDENTIALS_MSG));
          }

          return user;
        });
    });
};

module.exports = model('user', userSchema);
