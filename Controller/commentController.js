let { comment } = require("../Model/blogModel");
const asyncHandler = require("express-async-handler");

/****@show */
let showComment = asyncHandler(async () => {
  let data = await comment.find();
  if (data.length > 0) {
    return data;
  } else {
    return "no comments yet ";
  }
});

/****@createFunc */
let createComment = asyncHandler(async (obj) => {
  let { msg } = obj;
  let data = await comment.create({
    msg,
  });

  return "msg has been created";
});

/***@updateFunc */
let updateComment = asyncHandler(async (id,obj) => {

  console.log(id);
  console.log(obj);
  let { msg } = obj;

  let data = await comment.findOneAndUpdate({ _id:id}, { msg });
  if (data) {
    return "data has been updated";
  } else {
    return "no match data";
  }
});

/***@deleteFunc */
let deleteComment = asyncHandler(async (obj) => {
  let { msg } = obj;

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
};
