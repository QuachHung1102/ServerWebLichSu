const fs = require("fs");
const path = require("path");

const { rootDir1, rootDir2 } = require("../utilities/path");

const getHomePage = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "index.html"));
};


module.exports = {
  getHomePage,
};
