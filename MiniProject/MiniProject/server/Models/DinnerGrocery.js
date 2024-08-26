const mongoose = require('mongoose');

const dinnerGrocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const DinnerGrocery = mongoose.model('DinnerGrocery', dinnerGrocerySchema);

module.exports = DinnerGrocery;
