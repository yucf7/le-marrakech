const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
        },
    meals: [{
        type: mongoose.Types.ObjectId,
        ref: 'meal',
    }],
    quantities: [{type: Number}]


});


const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;