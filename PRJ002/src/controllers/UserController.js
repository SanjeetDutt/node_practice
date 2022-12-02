const UserService = require("../servicies/UserService")
const {InternalServerError, ValidationError} = require("../utilities/Errors")
const {validateFirstName, validateLastName, validateUserRole, validateEmail, validatePassword} = require("../utilities/validation/UserValidation")

const addUser = async (fname, lname, email, password, role)=>{
    const userRole = await validateUserRole(role);
    const user = await UserService.addUser(
        await validateFirstName(fname),
        await validateLastName(lname),
        await validateEmail(email),
        await validatePassword(password),
        userRole
    )

    if(!user)
        throw new InternalServerError("Not able to save user with following attributes : " + {
            fname, lname, email, password, role
        })
}

const getUserById = async (request)=>{
    const id = request.params.id

    if(!id)
        throw new ValidationError("Invalid user id")

    const user = await UserService.getByUserId(id)

    if(!user)
        throw new ValidationError("Please provide a valid user id")

    return user
}

module.exports.signUp = async (request, response, next) => {
    try {
        await addUser(
            request.body.firstName,
            request.body.lastName,
            request.body.email,
            request.body.password,
            "USER"
        )

        return response.send({
            success: true
        })

    } catch (error){
        next(error)
    }

}

module.exports.addAdmin = async (request, response, next) => {
    try {
        await addUser(
            request.body.firstName,
            request.body.lastName,
            request.body.email,
            request.body.password,
            request.body.userRole
        )

        return response.send({
            success: true
        })

    } catch (error) {
        next(error)
    }
}

const mapUser = (user)=>{
    return {
        effectiveDate : user.effectiveDate,
        endDate:user.endDate,
        id:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        role:user.user_role_name,
    }
}

module.exports.getAll = async (request, response, next) => {
    try {
        const users = await UserService.getAll()
        response.send(users.map(user=>mapUser(user)))
    } catch (error) {
        next(error)
    }
}

module.exports.getByUserId = async (request, response, next) => {
    try {
        const user = await getUserById(request)
        response.send(mapUser(user))
    } catch (error) {
        next(error)
    }
}

module.exports.updateUser = async (request, response, next) => {
    try {

        const user = await getUserById(request)

        const updatedUser = await UserService.updateUser(
            user,
            await validateFirstName(request.body.firstName),
            await validateLastName(request.body.lastName),
            await validatePassword(request.body.password)
        )

        if(!updatedUser)
            next(new InternalServerError("Not able to update user with following details : " + request))
        return response.send({
            success: true
        })
    } catch (error) {
        next(error)
    }
}

module.exports.deleteUser = async (request, response, next) => {
    try {
        const user = await getUserById(request)
        await UserService.deleteUser(user)
        response.send({
            success: true
        })
    } catch (error) {
        next(error)
    }
}

module.exports.getByUserRole = async (request, response, next) => {
    try {
        const roleName = request.params.roleName
        if (!roleName)
            next(new ValidationError("Please provide a valid user role"))

        const role = await UserService.getUserRole(roleName)

        if (!role)
            next(new ValidationError("Invalid user role"))

        return response.send(
            role.users.map(user=>mapUser(user))
        )

    } catch (error) {
        next(error)
    }
}

module.exports.login = async (request, response, next) => {
    try {
        const user = await UserService.login(
            request.body.email,
            await validatePassword(request.body.password)
        )

        return response.send({
            success: true
        })

    } catch (error) {
        next(error)
    }
}

