const express = require("express")
const devsRoutes = require("./devs.routes")

const router = express.Router();

router.use("/devs",
    devsRoutes
)

module.exports = router