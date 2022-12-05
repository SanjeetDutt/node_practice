const ValidationError = module.exports.ValidationError = class extends Error {
    constructor(message) {
        super(message)
        this.message = message
        this.name = this.constructor.name
        this.statusCode = 400 // Bad request
    }
}

const InternalServerError = module.exports.InternalServerError = class extends Error {
    constructor(internalMessage) {
        super("Internal Server Error")
        this.message = "Internal Server Error."
        this.internalMessage = internalMessage
        this.name = this.constructor.name
        this.statusCode = 500 // Internal server error
    }
}

const AccessDenied = module.exports.AccessDenied = class extends Error{
    constructor() {
        super("Forbidden : Access denied");
        this.message = "Forbidden : Access denied"
        this.name = this.constructor.name
        this.statusCode = 403 // Forbidden
    }
}

const generateErrorResponse = (...message)=>{
    return {
        success: false,
        message,
    }
}

module.exports.errorHandler = (error, request, response, next)=>{
    if(error instanceof ValidationError){
        response.status(error.statusCode)
        return response.send(generateErrorResponse(error.message))
    }

    if(error instanceof InternalServerError){
        response.status(error.statusCode)
        console.error("Hey we got a defined internal server error : " + error.internalMessage)
        return response.send(generateErrorResponse(error.message))
    }

    if(error instanceof AccessDenied){
        response.status(error.statusCode)
        return response.send(generateErrorResponse(error.message))
    }

    response.status(500)
    return response.send(generateErrorResponse("Internal server error"))
}