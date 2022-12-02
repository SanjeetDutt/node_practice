const Express = require("express");
const Router = Express.Router();

const userController = require("../controllers/UserController")
const authorization = require("../utilities/authorizatiion")

// :::: CREATE ::::
// user sign up => no authorization check needed
Router.post("/sign-up", userController.signUp)

// add admin => only super admin can do it. admin / super admin both can be added
Router.post("/add-admin", authorization.isSuperAdmin, userController.addAdmin)

// :::: READ ::::
// get all users => admin and super admin
Router.get("/", authorization.isAdmin, userController.getAll)

// get user by id => admin and super admin
Router.get("/:id", authorization.isAdmin, userController.getByUserId)

// :::: UPDATE ::::
// update user => only super admin has rights
Router.put("/update/:id", authorization.isSuperAdmin, userController.updateUser)

// :::: DELETE ::::
// delete user => only super admin has rights
Router.delete("/delete/:id", authorization.isSuperAdmin, userController.deleteUser)

// :::: MISC ::::
// get users by role =>  admin and super admin
Router.get("/by-role/:roleName", authorization.isAdmin, userController.getByUserRole)

// user login
Router.post("/login", userController.login)

module.exports = Router