const express = require("express");

const { homeRouter } = require("./home.router");

const rootRouter = express.Router();

rootRouter.use("/", homeRouter);

module.exports = {
  rootRouter,
};
