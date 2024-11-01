const express = require("express");

const {
  getHomePage,
} = require("../controllers/home.controller");
const homeRouter = express.Router();

homeRouter.get("/home", getHomePage);

module.exports = {
  homeRouter,
};
