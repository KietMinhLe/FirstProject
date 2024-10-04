const express = require("express");
const database = require("./config/database.js");
const Router = require("./routes/client/index.route");
const app = express();

require("dotenv").config();

//Env
const port = process.env.PORT;

//Views
app.set("views", "./views");
app.set("view engine", "pug");

//Public
app.use(express.static("public"));

//Router
Router(app);

//Config
database.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
