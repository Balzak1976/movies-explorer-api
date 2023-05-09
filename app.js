const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');

const { PORT, MONGO_URL } = require('./config');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3001', 'https://skor.nomoredomains.monster'],
  }),
);

mongoose.connect(MONGO_URL, {});

app.use(routes);

app.listen(PORT);
