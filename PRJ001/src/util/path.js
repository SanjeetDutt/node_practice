const path = require("path")

/**
 * This will return the path.join function pointing towards src dir
 * @param args folder location to be joined after src dir name
 * @returns path to the required file from any location
 */
const join = (...args)=>{
    return path.join(__dirname,"../" ,...args)
}

module.exports = {join}