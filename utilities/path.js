const path = require("path");

const rootDir1 = path.dirname(require.main.filename);
const rootDir2 = path.dirname(process.mainModule.filename);

module.exports = {
  rootDir1,
  rootDir2,
};
