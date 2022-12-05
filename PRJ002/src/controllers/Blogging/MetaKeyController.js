const MetaKeyService = require("../../servicies/Blogging/MetaKeyService")
const {ValidationError} = require("../../utilities/Errors");

const getAll = async (response) => {
    const list = await MetaKeyService.fetchAll()
    return response.send(
        list.map(el => {
            return {
                key: el.key,
                name: el.name,
                info: el.info,
            }
        })
    )
}

const validateKey = async (key) => {
    if(!key || key.trim() === "")
        throw new ValidationError("Invalid key")

    const metaKey = await get(key);

    if (metaKey.id)
        throw new ValidationError("Key already in use. Please use some different key")

    return key

}

const validateName = (name) => {
    if(!name || name.trim() === "")
        throw new ValidationError("Invalid name")

    return name
}

const validateInfo = (info) => {
    if(!info)
        return null
    return info
}

const get = async (key) => {
    return await MetaKeyService.getMetaKey(key)
}

const getAndValidate = async (key) => {
    const metaKey = get(key)
    if(!metaKey || metaKey.length < 1)
        throw new ValidationError("Please provide valid key")
    return metaKey
}

module.exports.get = async (request, response, next) => {
    try {
        if(!request.query.key)
            return await getAll(response)
        else
            return  await getAndValidate(request.query.key)
    } catch (error) {
        next(error)
    }
}

module.exports.add = async (request, response, next) => {
    try {
        await MetaKeyService.addMetaKey(
            await validateKey(request.body.key) ,
            await validateName(request.body.name) ,
            await validateInfo(request.body.info)
        )
        return await getAll(response)
    } catch (error) {
        next(error)
    }
}



module.exports.update = async (request, response, next) => {
    try {
        const oldMeta = await getAndValidate(request.params.key)
        await MetaKeyService.updateMetaKey(
            oldMeta,
            await validateKey(request.body.key) ,
            await validateName(request.body.name) ,
            await validateInfo(request.body.info)
        )
        return getAll(response)
    } catch (error) {
        next(error)
    }
}

module.exports.delete = async (request, response, next) => {
    try {
        const oldMetaKey = await getAndValidate(request.params.key)
        await MetaKeyService.deleteMetaKey(oldMetaKey)
        return getAll(response)
    } catch (error) {
        next(error)
    }
}