const mongoose = require('mongoose');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const { Schema, model } = mongoose;

const movieSchema = new Schema({
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
  },
  trailerLink: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
}, { versionKey: false });

movieSchema.statics.delJustOwnMovie = function foo(movieId, userId) {
  return this.findById(movieId).then((movie) => {
    if (!movie) {
      return Promise.reject(
        new NotFoundError('Карточка с указанным _id не найдена'),
      );
    } if (movie.owner.toString() !== userId) {
      return Promise.reject(
        new ForbiddenError('Нет доступа на удаление чужой карточки'),
      );
    }
    return movie.deleteOne();
  });
};

module.exports = model('movie', movieSchema);
