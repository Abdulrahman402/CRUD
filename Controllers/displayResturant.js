const Resturant = require("../Models/Resturant");
const User = require("../Models/User");

exports.displayResturant = async (req, res) => {
  // return a specific resturant
  const resturant = await Resturant.findOne({
    _id: req.params.resturantId,
  }).populate({
    model: User,
    path: "owner",
    select: "-password",
  });

  res.status(200).send(resturant);
};
