const userRole = require("../models/UserRoles")

const defaultValues = [
    {
        model: userRole, // model in which operation to perform
        where:{name:"superAdmin"}, // find for value
        values:{name: "superAdmin"} // if not found what value to enter
    },
    {
        model: userRole, // model in which operation to perform
        where:{name:"admin"}, // find for value
        values:{name: "admin"} // if not found what value to enter
    },
    {
        model: userRole, // model in which operation to perform
        where:{name:"user"}, // find for value
        values:{name: "user"} // if not found what value to enter
    },
]

module.exports = new Promise((resolve)=>{
    defaultValues.forEach(value=>{
        value.model.findOne({
            where: value.where
        }).then(result=>{
            console.log("ASDFFG",result)
            if(result === null){
                console.log("ADDING ENTRY TO " + value.model.tableName + " values " + value.values)
                value.model.create(value.values)
            }
        }).catch(err=>{
            console.error("Error while injecting default values : " + err)
        })
    })
    resolve()
})


