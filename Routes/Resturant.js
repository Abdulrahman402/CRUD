const express = require("express");

const router = express.Router();

const auth = require("../Middlewares/auth");

const addResturant = require("../Controllers/addResturant");
const deleteResturant = require("../Controllers/deleteResturant");
const editResturant = require("../Controllers/editResturant");
const allResturants = require("../Controllers/allResturants");
const displayResturant = require("../Controllers/displayResturant");
const searchResturants = require("../Controllers/searchResturants");

router.post("/addResturant", auth, addResturant.addResturant);

router.delete(
  "/deleteResturant/:resturantId",
  auth,
  deleteResturant.deleteResturant
);

router.put("/editResturant/:resturantId", auth, editResturant.editResturant);

router.get("/allResturants", allResturants.allResturants);

router.get("/displayResturant/:resturantId", displayResturant.displayResturant);

router.get("/searchResturants", searchResturants.searchResturants);

module.exports = router;
