const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programRouter = require("./programs/router");

router.use("/programs", programRouter);

/* ************************************************************************* */

module.exports = router;
