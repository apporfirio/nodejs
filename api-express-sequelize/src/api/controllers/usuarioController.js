'use strict';

const usuarioService = require('../services/usuarioService');
const logUtils = require('../../utils/loggingUtils');

async function login(req, res) {
    try {
        const {email, senha} = req.body;
        const {status, json} = await usuarioService.login(email, senha);

        res.status(status).json(json);
    }
    catch (err) {
        logUtils.stdOut(err);

        res.status(500).json({ mensagem: 'erro ao efetuar login' });
    }
}

module.exports = {
    login
};