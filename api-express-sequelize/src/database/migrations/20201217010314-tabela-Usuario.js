'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable(process.env.DATABASE_TABLE_USUARIO, {  
         id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         email: {
             type: Sequelize.STRING,
             unique: true,
             allowNull: false
         },
         senha: {
             type: Sequelize.STRING,
             allowNull: false
         },
         token: {
             type: Sequelize.STRING,
             allowNull: true,
             defaultValue: null
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
     await queryInterface.dropTable(process.env.DATABASE_TABLE_USUARIO);
  }
};
