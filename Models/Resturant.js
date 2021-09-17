const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resturantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    address: {
      type: String,
      required: true,
      lowercase: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    openingDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Resturant = mongoose.model("resturant", resturantSchema);
module.exports = Resturant;
