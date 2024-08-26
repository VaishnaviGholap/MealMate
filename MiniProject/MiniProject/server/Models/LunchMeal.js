const mongoose = require('mongoose');

const lunchMealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const LunchMeal = mongoose.model('LunchMeal', lunchMealSchema);
module.exports = LunchMeal;
