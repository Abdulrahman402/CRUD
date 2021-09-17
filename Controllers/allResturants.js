const Resturant = require("../Models/Resturant");
const User = require("../Models/User");

exports.allResturants = async (req, res) => {
  // Listing all resturant and their owners
  const resturants = await Resturant.find().populate({
    model: User,
    path: "owner",
    select: "-password",
  });

  res.status(200).send(resturants);
};
