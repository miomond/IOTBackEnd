let { comment } = require("../Model/commentModel");
const asyncHandler = require("express-async-handler");

/****@find */
// let findComment = asyncHandler(async (title) => {
//   let data = await comment.find({ title });
//   if (data.length > 0) {
//     return data;
//   } else {
//     return "no data found";
//   }
// });

/****@show */
let showComment = asyncHandler(async () => {
  let data = await comment.find();
  if (data.length > 0) {
    return data;
  } else {
    return "no data found";
  }
});

/****@createFunc */
let createComment = asyncHandler(async (obj) => {
  let {msg } = obj;
  let data = await comment.create({
    msg
  });

  return "data has been created";
});

/***@updateFunc */
// let updateComment = asyncHandler(async (title, obj) => {
//   let { description, body, author } = obj;

//   let data = await comment.findOneAndUpdate(
//     { title },
//     {
//       title,
//       description,
//       body,
//       author,
//     }
//   );
//   if (data) {
//     return "data has been updated";
//   } else {
//     return "no match data";
//   }
// });

/***@deleteFunc */
let deleteComment = asyncHandler(async (msg) => {
  let data = await comment.findOneAndDelete({ msg });
  if (data) {
    return "data has been deleted";
  } else {
    return "no match data";
  }
});

module.exports = {
  showComment,
  createComment,
  deleteComment,
  updateComment,
  findComment,
};
