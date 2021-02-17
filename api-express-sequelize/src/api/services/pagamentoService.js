'use strict';

const response = require('./response');
const Pagamento = require('../../database/models/Pagamento');
const chipService = require('./chipService');
const regexUtils = require('../../utils/regexUtils');


async function buscarPorCodigoChip(codigoChip) {
    const chip = await chipService.buscarPorCodigo(codigoChip);

    if (chip) 
        return response(200, await Pagamento.findAll({ where: {chipId: chip.id} }));
    else 
        return response(404, []);
}

async function inserir(dadosPagamento) {
    const mensagemErro = await validarPagamento(dadosPagamento);

    if (mensagemErro)
        return response(400, { mensagem: mensagemErro });
    else {
        const pagamento = await inserirPagamento(dadosPagamento);
        return response(200, { mensagem: 'pagamento inserido com sucesso', id: pagamento.id });
    }
}

async function cancelar(idPagamento) {
    const registros = await Pagamento.update({ cancelado: true }, { where: {id: idPagamento}});
    const numeroRegistrosAfetados = registros[0];

    if (numeroRegistrosAfetados === 0)
        return response(404, { mensagem: 'pagamento não pode ser cancelado' });
    else
        return response(200, { mensagem: 'pagamento cancelado com sucesso' });
}

async function deletar(idPagamento) {
    const numeroRegistrosAfetados = await Pagamento.destroy({ where: {id: idPagamento}});

    if (numeroRegistrosAfetados === 0)
        return response(404, { mensagem: 'pagamento não pode ser deletado' });
    else
        return response(200, { mensagem: 'pagamento deletado com sucesso' });
}


//
async function validarPagamento(dadosPagamento) {
    const validacoes = [
        await validarChipPagamento(dadosPagamento.codigoChip),
        validarValorPagamento(dadosPagamento.valor),
        validarParcelasPagamento(dadosPagamento.parcelas),
        validarModoPagamento(dadosPagamento.modo),
        validarDataPagamento(dadosPagamento.data)
    ];

    return validacoes
        .filter(validacao => validacao !== '')
        .reduce((acc, validacao, i) => {
            if (i == 0)
                return acc += validacao;
            else
                return acc += ', ' + validacao;
        }, '');
}

async function inserirPagamento(dadosPagamento) {
    const chip = await chipService.buscarPorCodigo(dadosPagamento.codigoChip);
    const valor = Number.parseFloat(dadosPagamento.valor);
    const parcelas = dadosPagamento.parcelas;
    const modo = dadosPagamento.modo.toUpperCase().replace('É', 'E');
    const data = new Date(dadosPagamento.data);

    return await Pagamento.create({
        valor,
        parcelas,
        modo,
        data,
        chipId: chip.id,
    });
}

async function validarChipPagamento(codigoChip) {
    const chip = await chipService.buscarPorCodigo(codigoChip);
    let mensagem = '';

    if (!chip) {
        mensagem = 'código de chip inválido';
    }

    return mensagem;
} 

function validarValorPagamento(valor) {
    let mensagem = '';
    const valorString = valor + '';

    if (!valor || (!regexUtils.valorPagamentoInteiro.test(valorString) && !regexUtils.valorPagamentoDecimal.test(valorString))) {
        mensagem = 'valor de pagamento inválido';
    }

    return mensagem;
}

function validarParcelasPagamento(parcelas) {
    let mensagem = '';
    const parcelasString = '' + parcelas;

    if (!parcelas || !regexUtils.parcelasPagamento.test(parcelasString)) {
        mensagem = 'número de parcelas inválido';
    }

    return mensagem;
}

function validarModoPagamento(modo) {
    let mensagem = '';

    if (!modo || !regexUtils.modoPagamento.test(modo.toUpperCase())) {
        mensagem = 'modo de pagamento inválido';
    }

    return mensagem;
}

function validarDataPagamento(data) {
    let mensagem = '';

    if (!data || !regexUtils.dataPagamento.test(data) || !dataVigente(data)) {
        mensagem = 'data de pagamento inválida';
    }

    return mensagem;
}

function dataVigente(dataString) {
    const hoje = new Date();
    const data = new Date(dataString);

    return (
        hoje.getFullYear() === data.getFullYear() &&
        hoje.getMonth() === data.getMonth() &&
        hoje.getDate() === data.getDate()
    );
}
//


module.exports = {
    buscarPorCodigoChip,
    inserir,
    cancelar,
    deletar
}