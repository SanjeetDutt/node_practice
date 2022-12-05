const Express = require("express")
const BodyParser = require("body-parser")

const router = require("./src/routers/_main")
const {errorHandler} = require("./src/utilities/Errors")

const app = new Express()

app.use(BodyParser.urlencoded({extended: false}))
app.use(Express.json())

app.use(router)

app.use((req,res)=>{
    res.status(404)
    return res.end("PAGE NOT FOUND")
})

app.use(errorHandler)

require("./src/models/_association")

console.log("SERVER STARTED AT PORT 3000")
app.listen(3000)