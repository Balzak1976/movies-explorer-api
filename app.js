const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes/index');
const { ALLOWED_URL } = require('./utils/constants');
const { PORT, MONGO_URL } = require('./config');

// =============================================================================

const app = express();

// Helmet для установки заголовков, связанных с безопасностью.
app.use(helmet());

app.use(cors({ origin: ALLOWED_URL }));

mongoose.connect(MONGO_URL, {});

app.use(routes);

app.listen(PORT);
