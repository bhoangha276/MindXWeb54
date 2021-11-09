const express = require('express');
const mongoose = require('mongoose');
const PostRouter = require('./modules/post');
const CommentRouter = require('./modules/comment');


async function main() { 
    await mongoose.connect('mongodb://localhost:27017/mindx-demo');

    console.log('Mongodb connected');
    const app = express();

    app.use(express.json());

    app.use('/api/posts', PostRouter);
    app.use('/api/comments', CommentRouter); 

    // app.get('/api/comments', async (req, res) => {
    //     try {
    //         const comments = await CommentModel.find();
    //         res.send({
    //             success: 1,
    //             data: comments
    //         })
    //     }
    //     catch(err) {
    //         res
    //         .status(400)
    //         .send({ 
    //             success: 0, 
    //             data: null, 
    //             messgae: err.messgae || 'Something went wrong'
    //         })
    //     }
    // })

    //api/comments...
    //routing
    // app.get('/api/posts', async (req, res) => {
    //     try {
    //         const posts = await PostModel.find();
    //         res.send({
    //             success: 1,
    //             data: posts
    //         })
    //     }
    //     catch(err) {
    //         res
    //         .status(400)
    //         .send({ 
    //             success: 0, 
    //             data: null, 
    //             messgae: err.messgae || 'Something went wrong'
    //         })
    //     }
    // })

    // app.get('/api/posts/:postId', async (req, res) => {
    //     try {
    //         const { postId } = req.params;

    //         const foundPost = await PostModel.findById(postId);
    //         res.send({
    //             success: 1,
    //             data: foundPost
    //         })
    //     }
    //     catch(err) {
    //         res
    //         .status(400)
    //         .send({ 
    //             success: 0, 
    //             data: null, 
    //             messgae: err.messgae || 'Something went wrong'
    //         })
    //     }
    // })

    // app.put('/api/posts/:postId', async (req, res) => {
    //     try {
    //         const { postId } = req.params;

    //         const updatePostData = req.body;

    //         // option { new:true } để kết quả trả về là document đã được update
    //         const updatePost = await PostModel.findByIdAndUpdate(postId, updatePostData, { new: true });
    //         res.send({
    //             success: 1,
    //             data: updatePost
    //         })
    //     }
    //     catch(err) {
    //         res
    //         .status(400)
    //         .send({ 
    //             success: 0, 
    //             data: null, 
    //             messgae: err.messgae || 'Something went wrong'
    //         })
    //     }
    // })
    
    // app.put('/api/posts/:postId/like', (req, res) => {
    //     // Yêu cầu: Người dùng gửi like lên => tăng like count
    //     // $inc trong mongodb
    // })

    // app.delete('/api/posts/:postId', async (req, res) => {
    //     try {
    //         const { postId } = req.params;
    //         const deletePost = await PostModel.findByIdAndDelete(postId);

    //         res.send({
    //             success: 1,
    //             data: deletePost
    //         })
    //     }
    //     catch(err) {
    //         res
    //         .status(400)
    //         .send({ 
    //             success: 0, 
    //             data: null, 
    //             messgae: err.messgae || 'Something went wrong'
    //         })
    //     }
    // })

    app.listen(9000, (err) => {
        if(err) throw err;

        console.log('Server connected');
    });
}

main();