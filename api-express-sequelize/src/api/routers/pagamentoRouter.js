'use strict';

const express = require('express');
const pagamentoController = require('../controllers/pagamentoController');
const pagamentoRouter = express.Router();
const prefixoProtegido = process.env.PROTECTED_ROUTE_PREFIX;

pagamentoRouter.get(prefixoProtegido + '/pagamento/:codigoChip', pagamentoController.buscarPorCodigoChip);
pagamentoRouter.post(prefixoProtegido + '/pagamento', pagamentoController.inserir);
pagamentoRouter.put(prefixoProtegido + '/pagamento/:id', pagamentoController.cancelar);
pagamentoRouter.delete(prefixoProtegido + '/pagamento/:id', pagamentoController.deletar);

module.exports = pagamentoRouter;
