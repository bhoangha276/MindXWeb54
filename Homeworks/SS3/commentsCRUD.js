/*
    {
        id: number,
        name: string,
        time: string,
        comment: string
    }
*/
const fs = require('fs');
const uuid = require('uuid');

const getAllComments = async () => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', {encoding: "utf-8"});
        const comments = JSON.parse(jsonComments);

        console.log(comments);
        return comments;
    }
    catch(err) {
        console.log(err);
        return [];
    }
}

const getComment = async (id) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', {encoding: "utf-8"});
        const comments = JSON.parse(jsonComments);

        const foundComment = comments.find(comment => comment.id === id);

        console.log(foundComment);
        return foundComment ? foundComment : null;
    }
    catch(err) {
        console.log(err);
        return null;
    }
}

const createComment = async (dataComment) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', {encoding: "utf-8"});
        const comments = JSON.parse(jsonComments);

        const newComment = {
            id: uuid.v1(),
            ...dataComment
        }

        const newComments = [...comments, newComment];
        await fs.promises.writeFile('comments.json', JSON.stringify(newComment));
        
        console.log(newComment);
        return newComments;
    }
    catch(err) {
        console.log(err);
        return null;
    }
}

const updateComment = async (id, dataUpdate) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', {encoding: "utf-8"});
        const comments = JSON.parse(jsonComments);
        
        //B1: Tim vi tri
        let foundIndex = comments.findIndex(comment => comment.id === id);

        if(foundIndex !== -1) {
            //B2: Update
            comments[foundIndex] = {
                ...comments[foundIndex],
                ...dataUpdate
            }

            //B3: Save
            await fs.promises.writeFile('comments.json', JSON.stringify(comments));

            console.log(comments[foundIndex]);
            return comments[foundIndex];
        } 
        return null;
    } catch(err) {
        console.log(err);
        return null;
    }
}

const deleteComment = async (id) => {
    try {
        const jsonComments = await fs.promises.readFile('comments.json', {encoding: "utf-8"});
        const comments = JSON.parse(jsonComments);
        
        const newComments = comments.filter(comment => comment.id !== id);
        await fs.promises.writeFile('comments.json', JSON.stringify(newComments));

        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}