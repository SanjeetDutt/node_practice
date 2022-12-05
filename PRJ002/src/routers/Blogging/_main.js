const Express = require("express")
const Router = Express.Router()

Router.use("/meta-key", require("./MetaKeyRouter"))

module.exports = Router
