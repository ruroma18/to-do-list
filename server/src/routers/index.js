const router = require('express').Router();
const ideaRouter = require('./ideaRouter')

router.use('/ideas', ideaRouter);

module.exports = router;