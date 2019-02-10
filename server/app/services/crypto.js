'use strict';

const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

module.exports ={

    encrypt(text ) {
        let cipher = crypto.createCipher(algorithm, process.env.SECRET);
        let crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },

    decrypt(text) {
        let decipher = crypto.createDecipher(algorithm, process.env.SECRET);
        let dec;
        try {
            dec = decipher.update(text, 'hex', 'utf8');
            dec += decipher.final('utf8');
            return dec ? dec : text;
        }
        catch (err) {
            return text;
        }
    },

};
