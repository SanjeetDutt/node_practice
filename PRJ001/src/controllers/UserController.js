const User = require("../models/Users")
const UserRole = require("../models/UserRoles")
const Cart = require("../models/Cart")
const Product = require("../models/Products")
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
    return User.findAll({
        include:[
            {
                model: UserRole,
                // where:{name:"admin"}
            }
        ]
    });
}

exports.getUserById = (id)=>{
    return User.findByPk(id,{
        include:[
            {model: Product,through: Cart}
        ]
    })
}