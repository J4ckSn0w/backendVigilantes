'use strict'

var express = require('express');
var tracktoController = require('../controllers/trackto');

var api = express.Router();

api.get('/buscar/tractos_vigilantes/:unidad', tracktoController.getTracktoInfo);

module.exports = api;