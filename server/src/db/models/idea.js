const {Schema, model} = require('../index');

const ideaSchema = new Schema ({
  myIdeas: {type: Array, required: true},
  doneIdeas: {type: Array, required: true},
  achievements: {type: Array, required: true},
  createdAt: {type: Date, default: Date.now}
})

const Idea = model('Idea', ideaSchema);

module.exports = Idea;