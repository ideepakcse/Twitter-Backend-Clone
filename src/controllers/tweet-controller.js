const {TweetService}=require('../services');
const tweetService = new TweetService();

async function createTweet(req ,res) {
    try{
        const response = await tweetService.create({
            content: req.body.content
        });
        return res.status(201).json({
            success:true,
            message:'sucessfully created a tweet',
            data: response,
            error:{}
        });
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong while creating tweet',
            data:{},
            error:error
        });
    }
}

module.exports = {
    createTweet
}