const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema
const commentSchema = mongoose.Schema(
  {
    msg: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const comment = mongoose.model("comment", commentSchema);

// create a schema
var blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true, index: true },

    imgUrl: {
      type: String,
      required: true,
      match:
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/g,
    },
    body: { type: String, required: true },
    author: { type: String, required: true },

    user: { type: Schema.Types.ObjectId, ref: "user" },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const blog = mongoose.model("blog", blogSchema);

module.exports = { blog, comment };
