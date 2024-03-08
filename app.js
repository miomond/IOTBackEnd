/* importing npm Package */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



/* importing Routes */
let {userRouter}=require("./Routes/userRoute");
let {blogRouter}=require("./Routes/blogRoute");
let {commentRouter}=require("./Routes/commentRoute");


/* connecting to dataBase */
mongoose
  .connect("mongodb://localhost:27017/Iot")
  .then(() => console.log("connected sucessflly to DB"))
  .catch((err) => console.log(err));

/* create Server */
const app = express();
const port = 5000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});



/* middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors("*"));

/* Router */

app.use("/user",userRouter)
app.use("/blog",blogRouter)
app.use("/comment",commentRouter)
