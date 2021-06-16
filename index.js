var express = require('express');
var app = require('./app');

//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});

app.listen(3800, function () {
  console.log('Ejemplo en puerto 3800!');
});