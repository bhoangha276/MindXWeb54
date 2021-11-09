// Xử lý logic nghiệp vụ
const CommentModel = require('./comment');

const getAllComments = async (req, res) => {
    try {
        const comments = await CommentModel.find();
        res.send({
            success: 1,
            data: comments
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

module.exports = {
    getAllComments
}