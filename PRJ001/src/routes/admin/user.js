const express = require("express")
const userController = require("../../controllers/UserController");
const router = express.Router();

router.post("/add",async (req,res,next)=>{
    console.log("ADDING NEW USER")
    const result = await userController.addUser(
        req.body.name,
        req.body.email,
        req.body.role,
    )

    return res.send(result)
})

router.get("/get-all",async (req, res, next) => {
    console.log("Getting all user")

    const result = await userController.getAll()

    return res.send(result.map(e=>{
        return {
            id:e.id,
            name: e.name,
            email: e.email,
            role: e["user-role"].name
        }
    }))
})

module.exports = router