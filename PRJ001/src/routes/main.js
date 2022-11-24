const publicRouter = require("./public")
const adminRouter = require("./admin")


const router = (app)=>{
    app.use("/", publicRouter)
    app.use("/admin", adminRouter)
}

module.exports = router