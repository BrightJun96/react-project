import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  like: Number,
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
