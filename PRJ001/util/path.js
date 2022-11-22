const path = require("path")

const join = (...args)=>{
    return path.join(__dirname,"../" ,...args)
}

module.exports = {join}