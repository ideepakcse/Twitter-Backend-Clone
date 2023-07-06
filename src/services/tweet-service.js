const {TweetRepository} = require('../repositories');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data)
    {
        try{
            const tweet = await this.tweetRepository.create(data);
            return tweet;
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = TweetService;