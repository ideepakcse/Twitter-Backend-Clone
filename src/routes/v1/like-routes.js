const express = require('express');
const router =express.Router();

const { LikeController } = require('../../controllers');
const { UserMiddleware } = require('../../middlewares');

router.post('/',UserMiddleware.authenticate,LikeController.toggleLike);

module.exports=router;