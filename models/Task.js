const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
  duration: Number,
});

module.exports = mongoose.model('Task', taskSchema);
