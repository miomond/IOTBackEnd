///// importing npm Package
const express = require("express");
let blogRouter = express.Router();
const asyncHandler = require("express-async-handler");

////// import ControllerFuncs
let {
  showBlog,
  createBlog,
  deleteBlog,
  updateBlog,
  findBlog,
} = require("../Controller/blogController");

/**show_all_blog*/
blogRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    res.send(await showBlog());
  })
);

/**find_by_title*/

blogRouter.post(
  "/find/:title",
  asyncHandler(async (req, res) => {
    res.send(await findBlog(req.params.title));
  })
);

// /**find_by_Blog_id*/
// blogRouter.post(
//   "/findByUserId/:user",
//   asyncHandler(async (req, res) => {
//     res.send(await findBlog(req.params.user));
//   })
// );

/*******createblog */
blogRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    let data = await createBlog(req.body);
    res.send(data);
  })
);

/******@deleteblog */

blogRouter.delete(
  "/delete/:title",
  asyncHandler(async (req, res) => {
    let data = await deleteBlog(req.params.title);
    res.send(data);
  })
);

/******@updateblog */
blogRouter.post(
  "/update/:title",
  asyncHandler(async (req, res) => {
    let data = await updateBlog(req.params.title, req.body);
    res.send(data);
  })
);

module.exports = { blogRouter };
