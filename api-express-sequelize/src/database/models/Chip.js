'use strict';

const { Model, Sequelize } = require('sequelize');

class Chip extends Model {
    static init(sequelize) {
        super.init(
            {
                codigo: Sequelize.STRING,
                modelo: Sequelize.STRING
            },
            { 
                sequelize,
                tableName: process.env.DATABASE_TABLE_CHIP
            }
        )
    }
}

module.exports = Chip;