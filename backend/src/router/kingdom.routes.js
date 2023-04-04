const express = require("express");

const { getAll, getOne, createOne, updateOneById, deleteOne } = require("../controller/kingdom.controller.js");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", createOne);

router.put("/:id", updateOneById);

router.delete("/:id", deleteOne);

module.exports = router;