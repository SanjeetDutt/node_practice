let crypto = require('crypto');

module.exports.encrypt = (string)=>{

    let key = crypto.createCipher('aes-128-cbc', 'sanjeet');
    let str = key.update(string, 'utf8', 'hex')
    str += key.final('hex');

    return str

}