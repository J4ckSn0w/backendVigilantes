'use strict'

var express = require('express');
var infotracktoController = require('../controllers/infotrackto');

var api = express.Router();


api.get('/infoTrackto',infotracktoController.getInfoTrackto);

module.exports = api;