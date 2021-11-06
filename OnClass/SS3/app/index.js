const express = require('express');// Lấy module bên thứ 3
const postCRUD = require('./postCRUD');

const app = express();

app.get('/get-all-posts', async (req, res) => {
    const allPosts = await postCRUD.getAllPosts();
    res.send({
        data: allPosts
    })
});

app.get('/get-detail-post', async (req, res) => {
    const foundPost = await postCRUD.getPost(1);
    res.send({
        data: foundPost
    })
});

app.get('/posts', async (req, res) => {
    const foundPost = await postCRUD.getPost(1);
    res.send({
        data: foundPost
    })
});

// app.get('/create-post', async (req, res) => {
//     const dataPost = {
//         imageUrl: 'example.jpg',
//         title: 'example',
//         description: 'example',
//         createdBy: 'example@gmail.com'
//     }
//     const newPost = await postCRUD.createPost(dataPost);
//     res.send({
//         data: newPost
//     })
// });

app.get('/update-post', async (req, res) => {
    const dataUpdate = {
        imageUrl: 'example1.jpg',
        title: 'example 1',
    }
    const updatePost = await postCRUD.updatePost('0', dataUpdate);
    res.send({
        data: updatePost
    })
});

app.delete('/deletePost', async (req, res) => {
    const { deletePostId } = req.params;
    const deleteStatus = await postCRUD.deletePost(1);
    res.send({
      data: deleteStatus
    })
});

app.listen(8080, err => {
    if(err) {
        return console.log(err);
    }

    console.log('Server started');
})