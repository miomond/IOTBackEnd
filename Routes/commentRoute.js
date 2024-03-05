///// importing npm Package
const express = require("express");
let commentRouter = express.Router();
const asyncHandler = require("express-async-handler");

////// ControllerFuncs
let {
    showComment,
    createComment,
    deleteComment,
    updateComment,
    findComment,
  } = require("../Controller/commentController");

/**show_all_blog*/
commentRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    res.send(await showBlog());
  })
);

/**find_by_title*/

commentRouter.post(
  "/find/:title",
  asyncHandler(async (req, res) => {
    res.send(await findBlog(req.params.title));
  })
);

/*******createblog */
commentRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    let data = await createBlog(req.body);
    res.send(data);
  })
);

/******@deleteblog */

commentRouter.delete(
  "/delete/:title",
  asyncHandler(async (req, res) => {
    let data = await deleteBlog(req.params.title);
    res.send(data);
  })
);

/******@updateblog */
commentRouter.post(
  "/update/:title",
  asyncHandler(async (req, res) => {
    let data = await updateBlog(req.params.title, req.body);
    res.send(data);
  })
);

module.exports = { commentRouter };
