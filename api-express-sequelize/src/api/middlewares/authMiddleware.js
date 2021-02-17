'use strict';

const authService = require('../services/authService');

async function authMiddleware(req, res, next) {
    if (req.path.startsWith(process.env.PROTECTED_ROUTE_PREFIX)) {
        const token = req.headers.authorization.split('Bearer ')[1];
        const mensagem = await authService.validarToken(token);
        
        if (mensagem)
            res.status(403).json({ mensagem });
        else
            next();
    }
    else {
        next();
    }
}

module.exports = authMiddleware;