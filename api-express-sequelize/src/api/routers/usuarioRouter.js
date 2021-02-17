'use strict';

const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const usuarioRouter = express.Router();

usuarioRouter.post('/login', usuarioController.login);

module.exports = usuarioRouter;
