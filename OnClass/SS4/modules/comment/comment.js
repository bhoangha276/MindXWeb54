const mongoose = require('mongoose');

const CommnentSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        postId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        createdBy: String,
    },
    {
        timestamp: true
    }
);

const CommentModel = mongoose.model('Comment', CommnentSchema);

module.exports = CommentModel;