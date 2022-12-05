const UserService = require("../../servicies/UserService");
const {ValidationError} = require("../Errors")

module.exports.validateFirstName =(name)=>{
    if(!name || name.trim() === "")
        throw new ValidationError("Please enter valid first name")
    return name
}

module.exports.validateLastName = (name)=>{
    return name
}

module.exports.validateEmail = async (email) => {
    const emailId = String(email).toLowerCase()

    if (!emailId.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        throw new ValidationError("Please provide a valid email id")

    const userByEmail = await UserService.findUserByEmail(emailId)

    if (userByEmail){
        throw new ValidationError("Email already exist. Please try to edit it")
    }

        return emailId
}

module.exports.validatePassword = (password)=>{
    if(password.length < 8)
        throw new ValidationError("Please provide a valid Password")

    return password
}

module.exports.validateUserRole = async (role) => {
    const userRole = await UserService.getUserRole(role);

    if(!userRole)
        throw new ValidationError("Please provide a valid user Role")

    return userRole
}