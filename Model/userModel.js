const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9_-]{3,16}$/,
  },
  nationalId: {
    type: Number,
    required: true,
    length: [14, "Must be 14 digit"],
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ["female", "male", "f", "m"],
      message: "Enter The Gender Pls",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  },

  password: {
    type: String,
    required: true,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
  },

  phoneNr: {
    type: Number,
    required: true,
    match: /^01[0-2,5]{1}[0-9]{8}$/,
  },
  address: { type: String, required: true, min: 6 },
});

let user = mongoose.model("user", userSchema);

module.exports = { user };
