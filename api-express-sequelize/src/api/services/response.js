'use static';

function response(status, json) {
    return {
        status, 
        json
    };
}

module.exports = response;