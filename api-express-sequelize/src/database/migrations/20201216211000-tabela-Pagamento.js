'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable(process.env.DATABASE_TABLE_PAGAMENTO, {  
         id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         valor: {
             type: Sequelize.DECIMAL(10, 2),
             allowNull: false
         },
         parcelas: {
             type: Sequelize.INTEGER,
             allowNull: false
         },
         modo: {
             type: Sequelize.ENUM(process.env.PAYMENT_DEBIT_OPTION, process.env.PAYMENT_CREDIT_OPTION),
             allowNull: false
         },
         data: {
             type: Sequelize.DATE,
             allowNull: false
         },
         cancelado: {
             type: Sequelize.BOOLEAN,
             allowNull: false,
             defaultValue: false
         },
         chipId: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {
                 model: process.env.DATABASE_TABLE_CHIP,
                 key: 'id'
             },
             onUpdate: 'CASCADE',
             onDelete: 'CASCADE'
         },
         criadoEm: {
             type: Sequelize.DATE,
             allowNull: false,
             defaultValue: Sequelize.fn('NOW')
         },
         atualizadoEm: {
             type: Sequelize.DATE,
             allowNull: false,
             defaultValue: Sequelize.fn('NOW')
         }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable(process.env.DATABASE_TABLE_PAGAMENTO);
  }
};
