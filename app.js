const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const { PORT, MONGO_URL } = require('./config');

const app = express();

mongoose.connect(MONGO_URL, {});

app.use(routes);

app.listen(PORT);
