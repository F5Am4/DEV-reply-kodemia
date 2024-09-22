const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  postText: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

postSchema.set("timestamps", true);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
