const express=require('express');

const router=express.Router();

const tweetRoutes =require('./tweet-routes');
const commentRoutes =require('./comment-routes');
const likeRoutes =require('./like-routes');
const userRoutes =require('./user-routes');
router.use('/tweets',tweetRoutes);
router.use('/comments',commentRoutes);
router.use('/likes',likeRoutes);
router.use('/users',userRoutes);

module.exports=router;