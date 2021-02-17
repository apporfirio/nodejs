'use strict';

const pagamentoService = require('../services/pagamentoService');
const logUtils = require('../../utils/loggingUtils');


async function buscarPorCodigoChip(req, res) {
    try {
        const codigoChip = req.params.codigoChip;
        const {status, json} = await pagamentoService.buscarPorCodigoChip(codigoChip);
        
        res.status(status).json(json);
    }
    catch (err) {
        logUtils.stdOut(err);

        res.status(500).json({ mensagem: 'erro ao listar pagamentos' });
    }
}

async function inserir(req, res) {
    try {
        const dadosPagamento = req.body;
        const {status, json} = await pagamentoService.inserir(dadosPagamento);

        res.status(status).json(json);
    }
    catch (err) {
        logUtils.stdOut(err);
        
        res.status(500).json({ mensagem: 'erro ao inserir pagamento' });
    }
}

async function cancelar(req, res) {
    try {
        const idPagamento = req.params.id;
        const {status, json} = await pagamentoService.cancelar(idPagamento);

        res.status(status).json(json);
    }
    catch (err) {
        logUtils.stdOut(err);

        res.status(500).json({ mensagem: 'erro ao cancelar pagamento' });
    }
}

async function deletar(req, res) {
    try {
        const idPagamento = req.params.id;
        const {status, json} = await pagamentoService.deletar(idPagamento);

        res.status(status).json(json);
    }
    catch (err) {
        logUtils.stdOut(err);

        res.status(500).json({ mensagem: 'erro ao delear pagamento' });
    }
}


module.exports = {
    buscarPorCodigoChip,
    inserir,
    cancelar,
    deletar
};