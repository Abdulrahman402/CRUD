const Resturant = require("../Models/Resturant");
const User = require("../Models/User");

const storage = require("code-storage");

exports.addResturant = async (req, res) => {
  // Validate that name not empty or rating is bigger than 5
  if (!req.body.name) return res.status(400).send("Name field is required");
  if (req.body.rating > 5)
    return res
      .status(400)
      .send("Please provide a rating number between 1 and 5");

  // Validate the rest of body request
  const { error } = storage.validator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Link the user and his resturant so that we can reference
  const data = req.body;
  let resturant = new Resturant(data);
  resturant.owner = req.user;
  await resturant.save();

  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { resturants: resturant._id } },
    { new: true }
  );

  res.send(resturant);
};
