const mongoose = require('mongoose');
const validator = require('validator');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const { urlRegExp } = require('../utils/regExp');

const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (v) => urlRegExp.test(v),
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (v) => urlRegExp.test(v),
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (v) => urlRegExp.test(v),
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: String,
      required: true,
      minlength: 24,
      maxlength: 24,
      validate: {
        validator: (v) => validator.isHexadecimal(v),
      },
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

movieSchema.statics.delJustOwnMovie = function foo(movieId, userId) {
  return this.findById(movieId).then((movie) => {
    if (!movie) {
      return Promise.reject(
        new NotFoundError('Фильм с указанным _id не найден'),
      );
    }
    if (movie.owner.toString() !== userId) {
      return Promise.reject(
        new ForbiddenError('Нет доступа на удалению чужого фильма'),
      );
    }
    return movie.deleteOne();
  });
};

module.exports = model('movie', movieSchema);
