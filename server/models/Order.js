const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user:{
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true
  },
  meals: [
    {
        meal: {
            type: mongoose.Types.ObjectId,
            ref: 'meal',
            required: true
        },
        orderedQuantity: {
            type: Number, 
            required: true
        }
    }
],
  total: {
    type: Number
  },
  address: {
    type: String
  },
  status: { // PAID, PENDING, DELIVERED,...
    type: String,
    required: true,
    default: 'PENDING'
  }
});


const Order = mongoose.model('order', orderSchema);

module.exports = Order;