const express = require('express');

const moviesRoutes = express.Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

// возвращает все сохранённые текущим  пользователем фильмы
// GET /movies
moviesRoutes.get('', getMovies);

// создаёт фильм с переданными в теле
// country, director, duration, year, description, image, trailer, nameRU,
// nameEN и thumbnail, movieId
// POST /movies
moviesRoutes.post('/', express.json(), createMovie);

// удаляет сохранённый фильм по id
// DELETE /movies/_id
moviesRoutes.delete('/:movieId', deleteMovie);

module.exports = moviesRoutes;
