/* eslint-disable class-methods-use-this */
import Post from '../models/post';

export default class PostController {
  async getPosts(req, res) {
    try {
      const posts = await Post.find();

      if (!posts.length) { return res.status(404).json(['Nenhum Post encontrado :(']); }

      return res.status(200).json(posts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async createPost(req, res) {
    const post = req.body;

    try {
      const created = await Post.create(post);

      if (!created) { return res.status(500).json('Post não cadastrado :('); }

      return res.status(201).json(created);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async addLike(req, res) {
    const { userId, _id } = req.body;

    try {
      const { likes } = await Post.findOne({ _id }, { _id: 0, likes: 1 }).lean();
      const userLike = likes.find((like) => like === userId);

      if (userLike) {
        const index = likes.indexOf(userId);
        likes.splice(index, 1);
      } else {
        likes.push(userId);
      }

      const update = await Post.updateOne({ _id }, { $set: { likes } });

      if (update) { return res.status(200).json(update); }

      return res.status(204).json('Post não encontrado!');
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async addComment(req, res) {
    const { postId, comments } = req.body;

    try {
      const update = await Post.findOneAndUpdate({ _id: postId }, { comments },
        { upsert: true, new: true });

      if (update) { return res.status(200).json(update); }

      return res.status(204).json('Post not Found');
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
