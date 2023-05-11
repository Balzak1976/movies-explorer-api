const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const { limiter } = require('./middlewares/limiter');
const routes = require('./routes/index');

const { PORT, MONGO_URL } = require('./config');

const app = express();

// Helmet для установки заголовков, связанных с безопасностью.
app.use(helmet());
// чтобы число запросов с одного IP в единицу времени было ограничено.
app.use(limiter);

app.use(
  cors({
    origin: ['http://localhost:3001', 'https://skor.nomoredomains.monster'],
  }),
);

mongoose.connect(MONGO_URL, {});

app.use(routes);

app.listen(PORT);
