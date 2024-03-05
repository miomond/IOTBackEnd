let { blog } = require("../Model/blogModel");
const asyncHandler = require("express-async-handler");


/****@find */
let findBlog = asyncHandler(async (title) => {
  let data = await blog.find({ title });
  if (data.length > 0) {
    return data;
  } else {
    return "no data found";
  }
});

/****@show */
let showBlog = asyncHandler(async () => {
  let data = await blog.find();
  if (data.length > 0) {
    return data;
  } else {
    return "no data found";
  }
});



/****@createFunc */
let createBlog = asyncHandler(async (obj) => {
  let { title, description, body, author } = obj;
  let data = await blog.create({
    title, description, body, author
  });

  return "data has been created";
});

/***@updateFunc */
let updateBlog = asyncHandler(async (title, obj) => {
  let { description, body, author  } = obj;

  let data = await blog.findOneAndUpdate(
    { title },
    {
        title, description, body, author 
    }
  )
  if (data) {
    return "data has been updated";
  } else {
    return "no match data";
  }
});

/***@deleteFunc */
let deleteBlog = asyncHandler(async (title) => {
  let data = await blog.findOneAndDelete({ title });
  if (data) {
    return "data has been deleted";
  } else {
    return "no match data";
  }
});

module.exports = { showBlog,createBlog, deleteBlog, updateBlog, findBlog };
