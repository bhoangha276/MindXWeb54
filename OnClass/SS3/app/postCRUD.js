const fs = require('fs');
const uuid = require('uuid');
/*
    {
        imageUrl: string,
        title: string,
        description: string,
        createdBy: string
    }
 */

const getAllPosts = async () => {
    try {
        const jsonPosts = await fs.promises.readFile('posts.json', {encoding: 'utf-8'});
        const posts = JSON.parse(jsonPosts);
        return posts;
    } catch(err) {
        console.log(err);
        return [];
    }
}

const getPost = async (id) => {
    try {
        const jsonPosts = await fs.promises.readFile('posts.json', {encoding: 'utf-8'});
        const posts = JSON.parse(jsonPosts);

        const foundPost = posts.find(post => post.id === id);
        
        return foundPost ? foundPost : null;
    } catch(err) {
        console.log(err);
        return null;
    }
}

const createPost = async (dataPost) => {
    try {
        const jsonPosts = await fs.promises.readFile('posts.json', {encoding: 'utf-8'});
        const posts = JSON.parse(jsonPosts);

        const newPost = {
            id: uuid.v1(),
            ...dataPost
        }
        
        const newPosts = [...posts, newPost];
        await fs.promises.writeFile('posts.json', JSON.stringify(newPost));
        
        return newPosts;
    } catch(err) {
        console.log(err);
        return null;
    }
}

const updatePost = async (id, dataUpdate) => {
    try {
        const jsonPosts = await fs.promises.readFile('posts.json', {encoding: 'utf-8'});
        const posts = JSON.parse(jsonPosts);
        
        //B1: Tim vi tri
        let foundIndex = posts.findIndex(post => post.id === id);

        if(foundIndex !== -1) {
            //B2: Update
            posts[foundIndex] = {
                ...posts[foundIndex],
                ...dataUpdate
            }

            //B3: Save
            await fs.promises.writeFile('posts.json', JSON.stringify(posts));
            return posts[foundIndex];
        } 
        return null;
    } catch(err) {
        console.log(err);
        return null;
    }
}

const deletePost = async (id) => {
    try {
        const jsonPosts = await fs.promises.readFile('posts.json', {encoding: 'utf-8'});
        const posts = JSON.parse(jsonPosts);
        
        const newPosts = posts.fillter(post => post.id !== id);
        await fs.promises.writeFile('posts.json', JSON.stringify(newPosts));

        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}