const mongoose = require('mongoose');
const { DB_URL, DB_NAME } = require('../constants');

async function start() {
  await mongoose.connect(DB_URL, { dbName: DB_NAME })
}

start().catch(err => console.log(err));

module.exports = {
  Schema: mongoose.Schema,
  model: mongoose.model
}