'use strict'

const jwt = require('jsonwebtoken');
const usuarioService = require('../services/usuarioService');

async function validarToken(token) {
    let mensagem;

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const usuario = await usuarioService.buscarPorEmail(payload.email);

        if (!usuario || usuario.token !== token || Date.now() > payload.expiracao) {
            mensagem = 'token expirada';
        }
    }
    catch (err) {
        mensagem = 'token inválida';
    }

    return mensagem
}

module.exports = {
    validarToken
};