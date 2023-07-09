const express = require('express');
const router =express.Router();

const { TweetController } = require('../../controllers');
const { UserMiddleware } = require('../../middlewares');

router.post('/',UserMiddleware.authenticate,TweetController.createTweet);

module.exports=router;