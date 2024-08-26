const mongoose = require('mongoose');

const breakfastMealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const BreakfastMeal = mongoose.model('BreakfastMeal', breakfastMealSchema);

module.exports = BreakfastMeal;
