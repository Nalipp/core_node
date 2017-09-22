const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
});

userSchema.pre('remove', function(next) {
  const Post = mongoose.model('post');

  Post.remove({_id: { $in: this.posts}}) 
    .then(() => next());
});

module.exports = mongoose.model("User", userSchema);
