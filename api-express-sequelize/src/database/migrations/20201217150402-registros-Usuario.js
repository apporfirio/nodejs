'use strict';

const bcrypt = require('bcrypt');

const hashingForce = Number.parseInt(process.env.PASSWORD_HASHING_FORCE);

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert(process.env.DATABASE_TABLE_USUARIO, 
        [
            { 
                email: 'usuario1@empresa1.com', 
                senha: await bcrypt.hash('senhaUsuario1!', hashingForce) 
            },
            { 
                email: 'usuario2@empresa2.com', 
                senha: await bcrypt.hash('senhaUsuario2!', hashingForce) 
            }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete(process.env.DATABASE_TABLE_USUARIO, null);
  }
};
