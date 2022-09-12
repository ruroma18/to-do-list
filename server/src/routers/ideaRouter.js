const ideaRouter = require('express').Router()
const IdeaController = require('./../controllers/ideaController')

ideaRouter.post('/', IdeaController.createIdea);
ideaRouter.get('/', IdeaController.getIdea);

module.exports = ideaRouter;