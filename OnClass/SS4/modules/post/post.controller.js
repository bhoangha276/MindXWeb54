const PostModel = require('./post');
const CommentModel = require('../comment/comment');

const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.send({
            success: 1,
            data: posts
        })
    }
    catch(err) {
        res
        .status(400)
        .send({ 
            success: 0, 
            data: null, 
            messgae: err.messgae || 'Something went wrong'
        })
    }
}

const getPost = async (req, res) => {
    try {
        const { postId } = req.params;
    
        const foundPost = await PostModel.findById(postId);
    
        res.send({
          success: 1,
          data: foundPost,
        });
    }
    catch (err) {
        res.status(400).send({
          success: 0,
          data: null,
          message: err.message || 'Something went wrong',
        });
    }
}

const createPosts = async (req, res) => {
    try {
        const createPostData = req.body;

        const newPost = await PostModel.create(createPostData);
        res.send({
            success: 1,
            data: newPost
        })
    }
    catch(err) {
        res
        .status(400)
        .send({ 
            success: 0, 
            data: null, 
            messgae: err.messgae || 'Something went wrong'
        })
    }
}

const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;

        const updatePostData = req.body;

        // option { new:true } để kết quả trả về là document đã được update
        const updatePost = await PostModel.findByIdAndUpdate({ _id: postId }, updatePostData, { new: true });
        res.send({
            success: 1,
            data: updatePost
        })
    }
    catch(err) {
        res
        .status(400)
        .send({ 
            success: 0, 
            data: null, 
            messgae: err.messgae || 'Something went wrong'
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;

        // option { new:true } để kết quả trả về là document đã được update
        const deletePost = await PostModel.findByIdAndDelete({ _id: postId }, updatePostData, { new: true });
        res.send({
            success: 1,
            data: deletePost
        })
    }
    catch(err) {
        res
        .status(400)
        .send({ 
            success: 0, 
            data: null, 
            messgae: err.messgae || 'Something went wrong'
        })
    }
}

const incLikePost = async (req, res) => {
    try {
        const { postId } = req.params;

        // option { new:true } để kết quả trả về là document đã được update
        const updatePost = await PostModel.findOneAndUpdate(
            { _id: postId }, 
            { $inc: { likeCount: 1 }}, 
            { new: true });
        res.send({
            success: 1,
            data: updatePost
        })
    }
    catch(err) {
        res
        .status(400)
        .send({ 
            success: 0, 
            data: null, 
            messgae: err.messgae || 'Something went wrong'
        })
    }
}

const getCommentByPost = async (req, res) => {
    try {
        const { postId } = req.params;
      
        const comments = await CommentModel.find({ postId });
    
        res.send({
          success: 1,
          data: comments,
        });
    } 
    catch (err) {
        res.status(400).send({
          success: 0,
          data: null,
          message: err.message || 'Something went wrong',
        });
    }
}

module.exports = {
    getAllPosts,
    getPost,
    createPosts,
    updatePost,
    deletePost,
    incLikePost,
    getCommentByPost
}