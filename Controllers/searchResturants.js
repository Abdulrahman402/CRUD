const storage = require("code-storage");
const _ = require("lodash");

const Resturant = require("../Models/Resturant");
const User = require("../Models/User");

exports.searchResturants = async (req, res) => {
  // If user doesn't use arguments to search return all resturants
  if (!req.body) {
    const resturants = await Resturant.find().populate({
      model: User,
      path: "owner",
      select: "-password",
    });

    res.status(200).send(resturants);
  }

  // validate body of the request
  const { error } = storage.validator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const query = req.body;

  // convert the body into lower case
  _.mapValues(query, _.method("toLowerCase"));

  // Find resturants with all coming queries
  const resturants = await Resturant.find(query).populate({
    model: User,
    path: "owner",
    select: "-password",
  });

  res.status(200).send(resturants);
};
