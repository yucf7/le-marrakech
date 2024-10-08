const { default: mongoose } = require('mongoose');
const Meal = require('../models/Meal')
const Order = require('../models/Order');
const Cart = require('../models/Cart');

module.exports.fetchAllMeals = async () => {
    try {
      const meals = await Meal.find({}).exec();
      return meals;
    } catch (error) {
      throw new Error('failed to fetch meals: ' + error.message);
    }
  }

module.exports.orderMeal = async (order) => {
    try {
      const createdOrder = await Order.create(order);
      return createdOrder;
    } catch (error) {
      throw new Error('failed to create order: ' + error.message);
    }
  }

module.exports.fetchUserOrders = async (userId) =>{
  const orders = await Order.find({
    $and:[
      {_id: userId},
      {status : 'PENDING'}
    ]
  });
  const data = orders || [];
  return data;
}

module.exports.getCartContent = async (userId) =>{
  const cart = await Cart.findOne({user: userId}).populate('meals.meal');
  const data = cart || [];
  return data;
}

module.exports.getMealById = async (mealId) =>{
  const meal = await Meal.findOne({_id: mealId});
  const data = meal || [];
  return data;
}

module.exports.updateOrder = async (orderId, updatedFields) =>{
  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
    { $set: updatedFields },
    { new: true } 
  );
}

module.exports.addToCart = async (userId, mealId) =>{
  const cart = await Cart.findOne({user: userId});
  const existingMeal = cart.meals.find(meal => String(meal.meal) === String(mealId));
  if (existingMeal) {
    existingMeal.orderedQuantity += 1;
  } else {
    cart.meals.push({
      meal: mealId,
      orderedQuantity: 1
    });
  }
  await cart.save();

  await Meal.findOneAndUpdate(
    { _id: mealId },
    { $inc: { quantity: -1 } } 
  );
  return cart;
}

module.exports.saveCart = async (userId, meals) =>{
  const cart = await Cart.findOneAndUpdate(
    { user: userId }, 
    { $set: { meals: meals } }, 
    { new: true } 
  )
  return cart;
}
module.exports.clearCart = async (userId) =>{
  const cart = await Cart.findOneAndUpdate(
    { user: userId }, 
    { $set: { meals: [] } }, 
    { new: true } 
  )
  return cart;
}
module.exports.updateCart = async (userId, cart)=> {
  const cartId = await Cart.findOne({user: userId});
  if(!cartId) return;
  const updatedOrder = await Order.findByIdAndUpdate(
    cartId,
    { $set: cart },
    { new: true } 
  );
}

module.exports.createMeal = async (meal)=>{
    return new Promise (async (resolve,reject)=>{
        const createdMeal = await Meal.create(meal).then((meal)=>{
            resolve(createdMeal);
        })
        .catch((error)=>{
            reject({error: 'not created'});
        })
    })
}

module.exports.deleteMeal = async (itemId) =>{
    return new Promise (async (resolve,reject)=>{
        try {
            if (!mongoose.isValidObjectId(itemId)) {
                reject({ error: 'invalid id' })
            }
        
            const deletedItem = await Meal.findByIdAndDelete(itemId);
        
            if (!deletedItem) {
                reject({ error: 'Item not found' })
            }
        
            resolve(deletedItem)
          } catch (error) {
            console.error(error);
            reject()
          }
    })

}

module.exports.deleteFromCart = async (userId, mealId) =>{
  try {
    const userCart = await Cart.findOne({ user: userId });

  if (userCart) {
    const existingMeal = userCart.meals.find(meal => String(meal.meal) === String(mealId));

    if (existingMeal && existingMeal.orderedQuantity > 1) {
      existingMeal.orderedQuantity -= 1;
    } else {
      userCart.meals = userCart.meals.filter(elet => String(elet.meal) !== String(mealId));
    }

    await userCart.save();
  }

  await Meal.findOneAndUpdate(
    { _id: mealId },
    { $inc: { quantity: 1 } } 
  );

  return userCart;
  
  } catch (error) {
    console.log(error)
  }
}