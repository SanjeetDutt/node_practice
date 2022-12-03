let crypto = require('crypto');

module.exports.encrypt = (string)=> crypto
    .createHash("MD5")
    .update(string)
    .digest("hex")