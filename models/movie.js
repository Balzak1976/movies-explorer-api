const mongoose = require('mongoose');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const { Schema, model } = mongoose;

const movieSchema = new Schema({
  country: {
    type: String,
  },
  director: {
    type: String,
  },
  duration: {
    type: Number,
  },
  year: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  trailerLink: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
  },
  nameRU: {
    type: String,
  },
  nameEN: {
    type: String,
  },
}, { versionKey: false });

movieSchema.statics.delJustOwnMovie = function foo(movieId, userId) {
  return this.findById(movieId).then((movie) => {
    if (!movie) {
      return Promise.reject(
        new NotFoundError('Фильм с указанным _id не найден'),
      );
    } if (movie.owner.toString() !== userId) {
      return Promise.reject(
        new ForbiddenError('Нет доступа на удалению чужого фильма'),
      );
    }
    return movie.deleteOne();
  });
};

module.exports = model('movie', movieSchema);
