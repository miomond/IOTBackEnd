///// importing npm Package
const express = require("express");
let userRouter = express.Router();
const asyncHandler = require("express-async-handler");

////////Model
let { user } = require("../Model/userModel");

////// ControllerFuncs
let {
  createUser,
  deleteUser,
  updateUser,
  findUser,
} = require("../Controller/userController");

/**show_all_user*/
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    res.send(await user.find());
  })
);


/**find_by_id*/

 userRouter.post(
  "/find/:nationalId",
  asyncHandler(async (req, res) => {
    res.send(await findUser(req.params.nationalId));
  })
);


/*******createuser */
userRouter.post(
  "/add",
  asyncHandler(async (req, res) => {
    let data = await createUser(req.body);
    res.send(data);
  })
);

/******@deleteuser */

userRouter.delete(
  "/delete/:nationalId",
  asyncHandler(async (req, res) => {
    let data = await deleteUser(req.params.nationalId);
    res.send(data);
  })
  );
  

  /******@updateuser */
userRouter.post(
  "/update/:id",
  asyncHandler(async (req, res) => {
    let data = await updateUser(req.params.id, req.body);
    res.send(data);
  })
);



module.exports = { userRouter };
