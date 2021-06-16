'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();

//Cargar rutas

//var user_routes = require('./routes/user');
var login_routes = require('./routes/login');
var infoTrackto_routes = require('./routes/infoTrackto');

//Cargar middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors
app.use(cors()); // los cors son para poder hacer peticiones externas 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

});
//Rutas
//app.use('/api', user_routes);
app.use('/api', login_routes);
app.use('/api',infoTrackto_routes);

//Exportar

module.exports = app;