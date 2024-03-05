const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema
// const dateFormat = require("dateformat");

// create a schema
var blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String },
    body: { type: String, required: true, exclude: true, allowOnUpdate: false },
    author: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    // comments: [CommentSchema],
  },
  { timestamps: true }
);

// blogSchema.virtual("publishedAt").get(function () {
//   return dateFormat(this.createdAt, "ddd, mmm dS, yyyy");
// });

// blogSchema.virtual("publishedSince").get(function () {
//   return moment(this.createdAt).fromNow();
// });

const blog = mongoose.model("blog", blogSchema);

module.exports = { blog };
