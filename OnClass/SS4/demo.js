const mongoose = require('mongoose');

// Post { id, imageUrl, description, createdBy, createdAt, updateAt }

// Schema là dinh dạng của document, chỉ ứng với mongose
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

async function main() {
    // Dùng JS để kết nối tới mongodb server
    await mongoose.connect('mongodb://localhost:27017/mindx-demo');
    console.log('MongoDB connected');
    const newPost = {
        title: 'Chap 4',
        description: 'HIIII',
        createdBy: 'hahoang@gmail.com',
        imageUrl: 'http://test.png'
    }
    //await PostModel.create(newPost);
    const posts = await PostModel.find();
    console.log(posts); 

}

main();