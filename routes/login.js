'use strict'

var express = require('express');
var loginController = require('../controllers/login');

var api = express.Router();

// create application/json parser
//var jsonParser = bodyParser.json();

//var md_auth = require('../middleware/authenticated');

//api.get('/pruebas', md_auth.ensureAuth, userController.pruebas);
//api.post('/newUser', loginController.newUser);
//api.post('/login', loginController.loginUser);
api.get('/home', loginController.home);
api.post('/login', loginController.login);

module.exports = api;