'use strict';

const Chip = require('../../database/models/Chip');

async function buscarPorCodigo(codigo) {
    return await Chip.findOne({ where: {codigo} });
}

module.exports = {
    buscarPorCodigo
};