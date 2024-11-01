const http = require("http");
const path = require("path");
const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const { rootDir1, rootDir2 } = require("./utilities/path");
const { rootRouter } = require("./routes/index.router");

const port = 3000;
const app = express();

app.engine(
  "hbs",
  expressHbs.engine({
    extname: "hbs",
  })
);
// app.set("view engine", "pug");
// app.set("view engine", "hbs");
// app.set("view engine", "ejs");
app.set("view", "views");

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(rootDir1, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1", rootRouter);
// app.get("/home", (req, res) => {
//   res.sendFile(path.join(rootDir1, "/public/pages/index-vn.html"));
// });

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
