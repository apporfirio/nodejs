'use strict';

function stdOut(message, err) {
    try {
        console.log(message + '\n' + err + '\n' + err.stack);
    }
    catch (e) {
        console.log(message, err);
    }
}

module.exports = {
    stdOut
};