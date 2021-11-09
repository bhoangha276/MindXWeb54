const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imageUrl: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdBy: String,
},
{
    timestamps: true
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;