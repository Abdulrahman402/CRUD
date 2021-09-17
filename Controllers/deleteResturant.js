const Resturant = require("../Models/Resturant");
exports.deleteResturant = async (req, res) => {
  // Find the specific resturant and delete it
  const resturant = await Resturant.findOneAndRemove({
    _id: req.params.resturantId,
    owner: req.user._id,
  });

  // check if resturant exists or the user owns it.
  if (!resturant)
    return res.status(400).send("Sorry, you can not delete this resturant");
  res.status(200).send("Resturant Deleted");
};
