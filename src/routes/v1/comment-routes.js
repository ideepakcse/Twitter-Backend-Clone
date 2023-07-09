const express = require('express');
const router =express.Router();

const { CommentController } = require('../../controllers');
const { UserMiddleware } = require('../../middlewares');

router.post('/',UserMiddleware.authenticate,CommentController.createComment);

module.exports=router;