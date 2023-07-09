const express=require('express');

const router=express.Router();

const tweetRoutes =require('./tweet-routes');
const commentRoutes =require('./comment-routes');

router.use('/tweets',tweetRoutes);
router.use('/comments',commentRoutes);

module.exports=router;