const { LikeRepository,CommentRepository,TweetRepository } = require('../repositories');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }
    async toggleLike(modelId, modelType, userId) {
        try{
            if(modelType == 'Tweet') {
                var likeable = await this.tweetRepository.get(modelId);
            } else if(modelType == 'Comment') {
                var likeable = await this.commentRepository.get(modelId);
            } else {
                throw new Error('unknown model type');
            }
            const exists = await this.likeRepository.findLike({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            if(exists) {
                likeable.likes.pull(exists.id);
                likeable.save();
                await this.likeRepository.destroy(exists.id);
                var isAdded = false;
            } 
            else {
                    const newLike = await this.likeRepository.create({
                    user: userId,
                    onModel: modelType,
                    likeable: modelId
                });
                likeable.likes.push(newLike);
                likeable.save();
                var isAdded = true;
            }
            return isAdded;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }   
}

module.exports = LikeService;