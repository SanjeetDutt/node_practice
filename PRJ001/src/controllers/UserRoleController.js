const userRoles = require("../models/UserRoles")

module.exports.getUserRole = (name)=>{
    return userRoles.findOne({
        where:{
            name
        }
    })
}