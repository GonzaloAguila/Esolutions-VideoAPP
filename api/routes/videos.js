const express = require('express');
const router = express();
const {newVideo, getVideo, getVideos} = require("../controllers/videos")

router.get('/', getVideos);
router.get('/:id', getVideo);
router.post('/newvideo', newVideo);

module.exports = router;
