const mongoose = require('mongoose');

const breakfastGrocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const BreakfastGrocery = mongoose.model('BreakfastGrocery', breakfastGrocerySchema);

module.exports = BreakfastGrocery;
