let { user } = require("../Model/userModel");
const asyncHandler = require("express-async-handler");

/****@find */
let findUser = asyncHandler(async (nationalId) => {
  let data = await user.find({ nationalId });
  if (data.length > 0) {
    return data;
  } else {
    return "no data found";
  }
});

/****@createFunc */
let createUser = asyncHandler(async (obj) => {
  let { fullName, nationalId, gender, email, password, phoneNr, address } = obj;
  let data = await user.create({
    fullName,
    nationalId,
    gender,
    email,
    password,
    phoneNr,
    address,
  });

  return "data has been created";
});

/***@updateFunc */
let updateUser = asyncHandler(async (nationalId, obj) => {
  let { fullName, gender, email, password, phoneNr, address } = obj;

  let data = await user.findOneAndUpdate(
    { nationalId },
    {
      fullName,
      gender,
      email,
      password,
      phoneNr,
      address,
    }
  )
  if (data) {
    return "data has been updated";
  } else {
    return "no match data";
  }
});

/***@deleteFunc */
let deleteUser = asyncHandler(async (nationalId) => {
  let data = await user.findOneAndDelete({ nationalId });
  if (data) {
    return "data has been deleted";
  } else {
    return "no match data";
  }
});

module.exports = { createUser, deleteUser, updateUser, findUser };
