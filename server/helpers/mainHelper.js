const { default: mongoose } = require('mongoose');
const Meal = require('../models/Meal')
const Order = require('../models/Order')

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

module.exports.updateOrder = async (orderId, updatedFields) =>{
  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
    { $set: updatedFields },
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