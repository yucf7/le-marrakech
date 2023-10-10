const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
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
    ]


});


const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;