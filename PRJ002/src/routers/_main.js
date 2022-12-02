const Express = require("express");
const Router = Express.Router();

Router.use("/user", require("./UserRouter") )

module.exports = Router

