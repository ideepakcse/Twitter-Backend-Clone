const express=require('express');

const router=express.Router();

const tweetRoutes =require('./tweet-routes');
const commentRoutes =require('./comment-routes');
const likeRoutes =require('./like-routes');

router.use('/tweets',tweetRoutes);
router.use('/comments',commentRoutes);
router.use('/likes',likeRoutes);

module.exports=router;