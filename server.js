'use strict';
// === LÍNEA OBLIGATORIA PARA FCC ===
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const express = require('express');
const app = express();

// === LÍNEA OBLIGATORIA PARA FCC ===
fccTesting(app);

// Configurar Pug
app.set('view engine', 'pug');
app.set('views', './views/pug');

// Ruta PRINCIPAL
app.get('/', (req, res) => {
  res.render('index');
});

// Escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
