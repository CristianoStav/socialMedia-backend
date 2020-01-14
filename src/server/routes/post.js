import PostController from '../controllers/PostController';

const router = require('express').Router();

const postController = new PostController();

router.get('/', postController.getPosts);
router.post('/createPost', postController.createPost);
router.post('/addLike', postController.addLike);
router.post('/addComment', postController.addComment);
router.delete('/:id', postController.deletePost);
module.exports = router;
