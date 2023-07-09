const {LikeService}=require('../services');
const likeService = new LikeService();

async function toggleLike(req ,res) {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.user.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully toggled the Like',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong while toggling the like',
            data: {},
            err: error
        });
    }
}

module.exports = {
    toggleLike
}