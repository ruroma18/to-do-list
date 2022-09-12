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