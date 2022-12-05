const Express = require("express")
const Router = Express.Router()
const MetaKeyController = require("../../controllers/Blogging/MetaKeyController")
const UserAuthorization = require("../../utilities/authorizatiion")

Router.get("",UserAuthorization.isAdmin, MetaKeyController.get)
Router.post("/add", UserAuthorization.isAdmin, MetaKeyController.add)
Router.put("/update/:key",UserAuthorization.isAdmin, MetaKeyController.update)
Router.put("/delete/:key",UserAuthorization.isAdmin, MetaKeyController.delete)

module.exports = Router
