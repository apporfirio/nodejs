'use strict';

const valorPagamentoInteiro = /^\d{1,10}$/; 
const valorPagamentoDecimal = /^(\d{1,8})\.(\d{1,2})$/;
const parcelasPagamento = /^\d{1,3}$/;
const modoPagamento = /^DEBITO|DÉBITO|CREDITO|CRÉDITO$/;
const dataPagamento = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})\:(\d{2})\:(\d{2})$/;

module.exports = {
    valorPagamentoInteiro,
    valorPagamentoDecimal,
    parcelasPagamento,
    modoPagamento,
    dataPagamento
};