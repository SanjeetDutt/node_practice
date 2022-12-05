/**
 * Concept of authorization
 * 1. Super admin holds the superpower and can do what ever user and admin do
 * 2. Admin can perform limited task which is defined by super admin
 * 3. User restricted to certain things only. content of user can be accessible by admin and super admin
 * 4. Self (user id should be passed as userId in params
 *
 */

const {AccessDenied} = require("../utilities/Errors")
const LoginCredential = require("../models/LoginCredentials")
const User = require("../models/User")

const getUser = async (request) => {

    const token = request.headers.authorization

    if (!token)
        throw new AccessDenied()

    const hash = token.replace("Bearer ", "")

    const loginCred = await LoginCredential.findOne({
        where: {
            hash
        },
        include: {
            model: User
        }
    })

    if (!loginCred)
        throw new AccessDenied()

    return loginCred.getUser()

}

const getUserType = (user) => {
    return user["user_role_name"];
}

const isSuperAdmin = (user) => {
    return getUserType(user) === "SUPER_ADMIN"
}

const isAdmin = (user) => {
    return getUserType(user) === "ADMIN" || isSuperAdmin(user)
}

const isUser = (user) => {
    return getUserType(user) === "USER" || isAdmin(user) || isSuperAdmin(user)
}

const isSelf = (user, request) => {
    return user.id === request.params.userId;
}

module.exports.isSuperAdmin = async (request, response, next) => {
    try {

        request.user = await getUser(request)

        if (isSuperAdmin(request.user))
            return next()

        return next(new AccessDenied())

    } catch (error) {
        next(error)
    }
}

module.exports.isAdmin = async (request, response, next) => {
    try {
        request.user = await getUser(request)

        if(isAdmin(request.user))
            return next()

        return next(new AccessDenied())
    } catch (error) {
        next(error)
    }
}

module.exports.isUser = async (request, response, next) => {
    try {
        request.user = await getUser(request)

        if (isUser(request.user))
            return next()


        return next(new AccessDenied())
    } catch (error) {
        next(error)
    }
}

module.exports.isAdminOrSelf = async (request, response, next) => {
    try {
        request.user = await getUser(request)

        if (isAdmin(request.user))
            return next()

        if (isSelf(request.user, request))
            return next()

        return next(new AccessDenied())
    } catch (error) {
        next(error)
    }
}

module.exports.isSuperAdminOrSelf = async (request, response, next) => {
    try {
        request.user = await getUser(request)

        if (isSuperAdmin(request.user))
            return next()

        if (isSelf(request.user, request))
            return next()

        return next(new AccessDenied())
    } catch (error) {
        next(error)
    }
}

module.exports.isUserOrSelf = async (request, response, next) => {
    try {
        request.user = await getUser(request)

        if (isUser(request.user))
            return next()

        if (isSelf(request.user, request))
            return next()

        return next(new AccessDenied())
    } catch (error) {
        next(error)
    }
}