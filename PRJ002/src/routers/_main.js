const Express = require("express");
const Router = Express.Router();

Router.use("/user", require("./UserRouter") )
Router.use("/blogging", require("./Blogging/_main"))

module.exports = Router

