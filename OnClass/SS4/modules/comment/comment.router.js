const router = require('express').Router();
const commentController = require('./comment.controller');

// Tập hợp các api có routing là /api/comments...
router.get('/', commentController.getAllComments());

module.exports = router;