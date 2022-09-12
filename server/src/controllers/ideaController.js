const createError = require('http-errors');
const Idea = require("../db/models/idea");

module.exports.createIdea = async(req, res, next) => {
  try {
    const {body} = req;

    const idea = await Idea.create(body)

    res.status(201).send({data: idea})
    
  } catch (error) {
    next(error)
    
  }
}

module.exports.getIdea = async(req, res, next) => {
  try {
    
    const idea = await Idea.find().sort({createdAt: -1}).limit(1)

    if (!idea) {
      return next(createError(404, 'Ideas not found!'))
    }

    res.status(200).send({data: {idea}})
    
  } catch (error) {
    next(error)
    
  }
};