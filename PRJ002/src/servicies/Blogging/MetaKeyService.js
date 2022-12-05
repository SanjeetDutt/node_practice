const MetaKey = require("../../models/blogging/MetaKey")

module.exports.addMetaKey = (key, name, info=null)=>{
    return MetaKey.create({
        key, name, info
    })
}

module.exports.getMetaKey = (key)=>{
    return MetaKey.findOne({
        where:{
            key
        }
    })
}

module.exports.fetchAll = ()=>{
    return MetaKey.findAll()
}

module.exports.updateMetaKey = (metaKey, key, name, info=null)=>{
    MetaKey.update({
        key, name, info
    }, {
        where:{
            key: metaKey.key
        }
    })
}

module.exports.deleteMetaKey = (metaKey)=>{
    MetaKey.destroy({
        where:{
            key: metaKey.key
        }
    })
}