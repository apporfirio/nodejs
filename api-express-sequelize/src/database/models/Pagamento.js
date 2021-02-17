'use strict';

const { Model, Sequelize } = require('sequelize');

class Pagamento extends Model {
    static init(sequelize) {
        super.init(
            {
                valor: Sequelize.DECIMAL(10, 2),
                parcelas: Sequelize.INTEGER,
                modo: Sequelize.ENUM(process.env.PAYMENT_DEBIT_OPTION, process.env.PAYMENT_CREDIT_OPTION),
                data: Sequelize.DATE,
                cancelado: Sequelize.BOOLEAN
            },
            { 
                sequelize,
                tableName: process.env.DATABASE_TABLE_PAGAMENTO
            }
        )
    }

    static associate(models) {
        super.belongsTo(models.Chip, { foreignKey: 'chipId', as: 'ChipOrigemPagamento' });
    }
}

module.exports = Pagamento;