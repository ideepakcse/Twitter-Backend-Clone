const express = require('express');
const router =express.Router();

const { LikeController } = require('../../controllers');

router.post('/',LikeController.toggleLike);

module.exports=router;