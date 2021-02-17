'use strict';

(async function init() {
    try {
        const env = require('dotenv');
        env.config();

        const db = require('./database/connection');
        await db.authenticate();

        const api = require('./api/listener');
        api.listen();
    }
    catch (err) {
        const logUtils = require('./utils/loggingUtils');
        logUtils.stdOut('Falha na inicialização do servidor: ', err);
    }
})();