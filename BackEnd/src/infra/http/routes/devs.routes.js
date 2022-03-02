const express = require("express");

const devsRoutes = express.Router();

const listDevsController = require("../../../controllers/ListDevsController")
const createDevsController = require("../../../controllers/CreateDevsController")

devsRoutes.get("/" ,listDevsController.handle)
devsRoutes.post("/" ,createDevsController.handle)


module.exports = devsRoutes
