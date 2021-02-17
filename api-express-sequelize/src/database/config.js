'use strict';

const dbConfig = {
    "dialect": process.env.DATABASE_DIALECT,
    "host": process.env.DATABASE_HOST,
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_SCHEMA,
    "port": process.env.DATABASE_PORT,
    "define": {
        timestamps: true,
        createdAt: 'criadoEm',
        updatedAt: 'atualizadoEm'
    }
};

module.exports = dbConfig;