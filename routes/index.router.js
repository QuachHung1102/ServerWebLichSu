const express = require("express");

const { homeRouter } = require("./home.router");

const rootRouter = express.Router();

rootRouter.use("/home", homeRouter);

module.exports = {
  rootRouter,
};
