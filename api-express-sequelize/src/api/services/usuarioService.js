'use strict';

const response = require('./response');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../../database/models/Usuario');


async function buscarPorEmail(email) {
    return await Usuario.findOne({ where: {email} }); 
}

async function login(email, senha) {
    const usuario = await buscarPorEmail(email);

    if (usuario && await bcrypt.compare(senha, usuario.senha)) {
        const token = gerarToken(email);
        const registros = await Usuario.update({ token }, { where: {id: usuario.id} });
        const numeroRegistrosAfetados = registros[0];

        if (numeroRegistrosAfetados === 0)
            return response(500, { mensagem: 'não foi possível vincular token' });
        else
            return response(200, { token });
    }

    return response(404, { mensagem: 'email ou senha inválidos' });
}


//
function gerarToken(email) {
    const duracaoToken = Number.parseInt(process.env.JWT_EXPIRATION)
    const expiracao = new Date(Date.now() + duracaoToken).getTime();

    return jwt.sign(
        {
            email,
            expiracao
        },
        process.env.JWT_SECRET
    );
}
//


module.exports = {
    login,
    buscarPorEmail
};