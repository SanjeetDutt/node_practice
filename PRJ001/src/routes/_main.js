const express = require("express")
const router = express.Router()

router.use("/admin", require("./admin/_main"))
router.use("/", require("./public/_main"))

module.exports = router