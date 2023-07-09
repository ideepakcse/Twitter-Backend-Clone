const {TweetRepository,HashtagRepository} = require('../repositories');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data)
    {
        try{
            const tweet = await this.tweetRepository.create(data);
            const content = data.content;
            const allHashtags = content.match(/#[a-zA-Z0-9_]+/g) // this regex extracts hashtags
            const tags=[];
            if(allHashtags)
            {
                tags=allHashtags.map((tag) => tag.substring(1).toLowerCase());
            }
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            let titleOfPresenttags = alreadyPresentTags.map((tag) => tag.title);
            let newTags = tags.filter((tag) => !titleOfPresenttags.includes(tag));
            newTags = newTags.map((tag) => {
                return {title: tag, tweets: [tweet.id]}
            });
            await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentTags.map((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = TweetService;