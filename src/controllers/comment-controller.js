const {CommentService}=require('../services');
const commentService = new CommentService();

async function createComment(req ,res) {
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.body.content);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a comment',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong while creating a comment',
            data: {},
            err: error
        });
    }
}

module.exports = {
    createComment
}