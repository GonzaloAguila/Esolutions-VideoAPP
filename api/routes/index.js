const express = require('express')
const router = express()
const categoriesRouter = require('./categories')
const videosRouter = require('./videos')

router.use('/categories', categoriesRouter)
router.use('/videos', videosRouter)

module.exports = router