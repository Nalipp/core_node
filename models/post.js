const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
