'use strict';
const express = require('express');
const app = express();

/****************************************************
 *  FREE CODE CAMP TESTS - DO NOT EDIT OR REMOVE   *
 ***************************************************/

const fccTesting = require('./freeCodeCamp/fcctesting.js');
fccTesting(app);

/****************************************************
 *  SETUP                                           *
 ***************************************************/

app.set('view engine', 'pug');
app.set('views', './views/pug');

app.route('/').get((req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
