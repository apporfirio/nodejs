'use strict';

const { Model, Sequelize } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                email: Sequelize.STRING,
                senha: Sequelize.STRING,
                token: Sequelize.STRING
            },
            { 
                sequelize,
                tableName: process.env.DATABASE_TABLE_USUARIO 
            }
        )
    }
}

module.exports = Usuario;