const { CommentRepository,TweetRepository } = require('../repositories');

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) 
    {
        try{
            if(modelType == 'Tweet') {
                var commentable = await this.tweetRepository.get(modelId);
            } else if(modelType == 'Comment') {
                var commentable = await this.commentRepository.get(modelId);
            } else {
                throw new Error('unknown model type');
            }
            const comment = await this.commentRepository.create({
                content: content,
                onModel: modelType,
                commentable: modelId,
                user: userId,
                comments: []
            });
            commentable.comments.push(comment);
            commentable.save();
            return comment;
        }
        catch{
            console.log(error);
            throw error;
        }
    }

}

module.exports = CommentService;