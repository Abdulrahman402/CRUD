const storage = require("code-storage");

const Resturant = require("../Models/Resturant");

exports.editResturant = async (req, res) => {
  // Validate that name not empty or rating is bigger than 5
  if (!req.body.name) return res.status(400).send("Name field is required");
  if (req.body.rating > 5)
    return res.status("Please provide a rating number between 1 and 5");

  // Validate the rest of body request
  const { error } = storage.validator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Find this specific resturant and update it.
  const resturant = await Resturant.findOneAndUpdate(
    { _id: req.params.resturantId, owner: req.user._id },
    req.body,
    { new: true }
  );

  // check if resturant exists or the user owns it.
  if (!resturant)
    return res.status(400).send("Sorry, you can not edit this resturant");

  res.status(200).send(resturant);
};
