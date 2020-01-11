const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

module.exports = app;
