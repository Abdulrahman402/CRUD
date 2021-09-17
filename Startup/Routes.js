const express = require("express");
const cors = require("cors");

const resturant = require("../Routes/Resturant");

module.exports = function (app) {
  app.use(express.json());
  app.use("/resturant", resturant);
  app.use(cors());
};
