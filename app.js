const express = require("express");
require("dotenv").config();

const app = express();

require("./Startup/Routes")(app);
require("./Startup/DB");

app.get("/", (req, res) => res.send("Welcome to Qurba"));

app.listen(
  process.env.PORT,
  console.log(`Listening on port ${process.env.PORT}`)
);
