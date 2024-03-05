const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true, unique: true },
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
    validate: [isEmail, "invalid email"],
    unique: true,
  },

  password: { type: Number, required: true, min: 10 },
  phoneNr: {
    type: Number,
    required: true,
    match: /^01[0-2,5]{1}[0-9]{8}$/,
  },
  address: { type: String, required: true, min: 6 },
});

let user = mongoose.model("user", userSchema);

module.exports = { user };
