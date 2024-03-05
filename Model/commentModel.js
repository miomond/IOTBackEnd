const mongoose = require("mongoose");
const dateFormat = require("dateformat");
const moment = require("moment");

// create a schema
const commentSchema = mongoose.Schema({
  // name: { type: String, trim: true, index: true },
  // email: { type: String, trim: true, required: true },
  msg: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
});

// CommentSchema.virtual("commentAddedSince").get(function () {
//   return moment(this.createdAt).fromNow();
// });

const comment = mongoose.model("comment", commentSchema);

module.exports = { comment };
