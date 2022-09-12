const {Schema, model} = require('../index');

const ideaSchema = new Schema ({
  myIdeas: {type: Array, required: true},
  doneIdeas: {type: Array, required: true},
  achievements: {type: Array, required: true}
})

const Idea = model('Idea', ideaSchema);

module.exports = Idea;