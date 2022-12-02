const User = require("../models/User")
const UserRole = require("../models/UserRole")
const encrypt = require("../utilities/excrypt")
const {ValidationError} = require("../utilities/Errors");

module.exports.getUserRole = (role) => {
    return UserRole.findByPk(role,{
        include:{
            model:User
        }
    })
}


module.exports.addUser = (firstName, lastName, email, password, userRole) => {
    return userRole.createUser({
        firstName, lastName, email,
        password: password,
    })
}

module.exports.getAll = ()=>{
    return User.findAll({
        include:{
            model:UserRole,
        }
    })
}

module.exports.getByUserId = (id)=>{
    return User.findByPk(id,{
        include:{
            model:UserRole
        }
    })
}

module.exports.findUserByEmail = (email)=>{
    return User.findOne({
        where:{email}
    })
}

module.exports.updateUser = (user, firstName, lastName, password)=>{
    console.log("updating user ")
    console.log(user)
    return User.update({
        firstName, lastName, password
    },{
        where:{
            id: user.id
        }
    })

}

module.exports.deleteUser = (user)=>{
    console.log("deleting user")
    console.log(user)
    return User.destroy({
        where:{
            id: user.id
        }
    })
}

module.exports.login = async (email, password) => {
    const user = await User.findAll({
        where: {
            email, password
        }
    })

    if (!user || user.length < 1)
        throw new ValidationError("Invalid user credential")

    return user
}

