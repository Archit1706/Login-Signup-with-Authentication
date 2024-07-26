//import mongoose to create mongoose model
const mongoose = require('mongoose');

//create Schema
const todoItemSchema = new mongoose.Schema({
  item:{
    type:String,
    required: true
  }
})

//export this Schema
module.exports = mongoose.model('Todo', todoItemSchema);