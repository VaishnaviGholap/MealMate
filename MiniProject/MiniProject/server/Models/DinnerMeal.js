const mongoose = require('mongoose');

const dinnermealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const DinnerMeal = mongoose.model('DinnerMeal', dinnermealSchema);


module.exports = DinnerMeal;
