const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

/**
 * @type {e.Application}
 */
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

exports.app = app;
