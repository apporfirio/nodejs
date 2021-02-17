'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert(process.env.DATABASE_TABLE_CHIP, 
        [
            { 
                codigo: '123BR', 
                modelo:  'Neo'
            },
            { 
                codigo: '098USA', 
                modelo:  'Brave'
            },
            { 
                codigo: '12UK345', 
                modelo:  'Fy'
            },
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete(process.env.DATABASE_TABLE_CHIP, null);
  }
};
