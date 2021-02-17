'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable(process.env.DATABASE_TABLE_CHIP, {  
         id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         codigo: {
             type: Sequelize.STRING,
             unique: true,
             allowNull: false
         },
         modelo: {
             type: Sequelize.STRING,
             allowNull: false
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
         },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable(process.env.DATABASE_TABLE_CHIP);
  }
};
