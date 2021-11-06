const express = require('express');
const commentCRUD = require('./commentsCRUD');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Comments")
})

// Get all comments
app.get('/comments', async (req, res) => {
    const Comments = await commentCRUD.getAllComments();

    res.send({
        data: Comments
    })
});

//Get comment
app.get('/comments/:id', async (req, res) => {
    const { id } = req.params;
    const Comment = await commentCRUD.getComment(String(id));

    res.send({
        data: Comment
    })
});

//Creat comments
app.post('/comments', async (req, res) => {
    const dataComment = req.body;

    console.log(dataComment);

    const newComment = await commentCRUD.createComment(dataComment);
    res.send({
        data: newComment,
    })

});

//Update comment
app.put('/comments/:id', async (req, res) => {
    const {id} = req.params;
    const dataUpdate = req.body;

    const updateComment = await commentCRUD.updateComment(id, dataUpdate);
    res.send({
        data: updateComment,
    })
});

//Delete comment
app.delete('/comments/:id', async (req, res) => {
    const {id} = req.params;

    const newComments = await commentCRUD.deleteComment(id);
    res.send({
        data: newComments,
    })
});

//localhost: 8080
app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log ('Server Started');
});