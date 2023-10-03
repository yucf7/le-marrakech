const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name:{
    type:String
  },
  description:{
    type:String
  },
  image:{
    type:String
  },
  quantity:{
    type:Number
  },
  price:{
    type:Number
  },
  
});


const Meal = mongoose.model('meal', mealSchema);

module.exports = Meal;