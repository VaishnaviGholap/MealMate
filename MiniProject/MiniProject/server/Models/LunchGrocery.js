const mongoose = require('mongoose');

const groceryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const LunchGrocery = mongoose.model('LunchGrocery', groceryItemSchema);
module.exports = LunchGrocery;
