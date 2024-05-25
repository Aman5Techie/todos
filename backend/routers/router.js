const { Router } = require("express");

const router = Router();

const todo = require("./todos")

router.use("/",todo)

module.exports = router