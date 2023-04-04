const express = require("express");

const { getAll, getOne, createOne, updateName, deleteKingdom } = require("../controller/kingdom.controller.js");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", createOne);

router.put("/", updateName);

router.delete("/", deleteKingdom);

module.exports = router;