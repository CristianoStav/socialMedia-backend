import mongoose from 'mongoose';

const Post = mongoose.Schema({
  author: String,
  thumbAuthor: String,
  date: String,
  description: String,
  likes: Array,
  comments: Array,
  photo: String,
}, {
  timestamp: true,
});

module.exports = mongoose.model('Post', Post);
