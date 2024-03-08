let { blog } = require("../Model/blogModel");
const asyncHandler = require("express-async-handler");


/****@findBlog_By_title */
let findBlog = asyncHandler(async (title) => {
  let data = await blog.find({ title });
  if (data.length > 0) {
    return data;
  } else {
    return "no data found";
  }
});
/****@findBlog_By_user*/
// let findBlog_nationalId = asyncHandler(async (user) => {
//   let data = await blog.find({ user });
//   if (data.length > 0) {
//     return data;
//   } else {
//     return "no data found";
//   }
// });

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
  let { title,imgUrl, body, author,user } = obj;
  let data = await blog.create({
    title,imgUrl, body, author,user
  });

  return "data has been created";
});

/***@updateFunc */
let updateBlog = asyncHandler(async (title, obj) => {
  let { imgUrl, body, author,user  } = obj;

  let data = await blog.findOneAndUpdate(
    { title },
    {
       imgUrl ,body, author ,user
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
