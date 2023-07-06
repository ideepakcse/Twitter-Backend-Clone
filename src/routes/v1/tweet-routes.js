const express = require('express');
const router =express.Router();

const { TweetController } = require('../../controllers');

router.post('/',TweetController.createTweet);

module.exports=router;