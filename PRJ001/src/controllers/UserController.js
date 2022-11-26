const User = require("../models/Users")
const userRoleController = require("./UserRoleController")


module.exports.addUser = async (name, email, roleName) => {

    const userRole = await userRoleController.getUserRole(roleName)

    if(userRole === null){
        console.error("No such role name found " + userRole)
    }

    return userRole.createUser({
        name, email
    }).then(result => {
        console.log(result)
    })

}

module.exports.getAll = () =>{
    return User.findAll();
}