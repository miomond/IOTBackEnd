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
} = require("../Controller/commentController");

/**show_all_comments*/
commentRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    res.send(await showComment());
  })
);



/*******createcomment */
commentRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    let data = await createComment(req.body);
    res.send(data);
  })
);

/******@deleteComment */

commentRouter.delete(
  "/delete",
  asyncHandler(async (req, res) => {
    let data = await deleteComment(req.body);
    res.send(data);
  })
);

/******@updateComment */
commentRouter.post(
  "/update",
  asyncHandler(async (req, res) => {
    let data = await updateBlog(req.body);
    res.send(data);
  })
);

module.exports = { commentRouter };
