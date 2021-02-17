'use strict';

const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middlewares/authMiddleware');
const usuarioRouter = require('./routers/usuarioRouter');
const pagamentoRouter = require('./routers/pagamentoRouter');

let listening = false;

function listen() {
    if (!listening) {
        const app = express();

        app.use(cors());
        app.use(express.json());
        app.use(authMiddleware);
        app.use(usuarioRouter);
        app.use(pagamentoRouter);

        app.listen(process.env.SERVER_PORT, () => {
            listening = true;
            console.log('>>> Ouvindo na porta ' + process.env.SERVER_PORT);
        });
    } 
}

module.exports = {
    listen
};