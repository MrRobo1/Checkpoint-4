const express = require("express");

const { getAll, getOne } = require("../controller/kingdom.controller.js");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

module.exports = router;