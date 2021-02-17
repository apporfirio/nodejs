'use strict';

const Sequelize = require('sequelize');
const dbConfig = require('./config');
const Usuario = require('./models/Usuario');
const Chip = require('./models/Chip');
const Pagamento = require('./models/Pagamento');

const db = new Sequelize(dbConfig);

Usuario.init(db);

Chip.init(db);

Pagamento.init(db);
Pagamento.associate(db.models);

module.exports = db;
