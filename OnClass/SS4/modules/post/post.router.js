const router = require('express').Router();
const router = require('.');
const postController = require('./post.controller');

//Router tập hợp các routing có tiền tố /api/post
router.get('/', postController.getAllPosts());
router.get('/:id', postController.getPost());
router.post('/', postController.createPosts());
router.put('/:postId', postController.updatePost());
router.delete('/:postId', postController.deletePost());
router.put('/:postId/like', postController.incLikePost());
router.put('/:postId/comments', postController.getCommentByPost());


module.exports = router;