const http2 = require('node:http2');
const Movie = require('../models/movie');

const OK = http2.constants.HTTP_STATUS_OK; // 200
const CREATED = http2.constants.HTTP_STATUS_CREATED; // 201

// GET /movies
const getMovies = (req, res, next) => {
  const { _id: owner } = req.user;

  Movie.find({ owner })
    .populate(['owner'])
    .sort({ createdAt: -1 })
    .then((movie) => res.send(movie))
    .catch(next);
};

// создаёт фильм с переданными в теле
// country, director, duration, year, description, image, trailer, nameRU,
// nameEN и thumbnail, movieId
// POST /movies
const createMovie = (req, res, next) => {
  const { _id: owner } = req.user;

  Movie.create({ owner, ...req.body })
    .then((movie) => movie.populate(['owner']).then(() => res.status(CREATED).send(movie)))
    .catch(next);
};

// удаляет сохранённый фильм по id
// DELETE /movies/_id
const deleteMovie = (req, res, next) => {
  const { mongoId } = req.params;

  Movie.delJustOwnMovie(mongoId, req.user._id)
    .then(() => res.status(OK).send({ message: 'Фильм успешно удалён' }))
    .catch(next);
};

module.exports = { getMovies, createMovie, deleteMovie };
