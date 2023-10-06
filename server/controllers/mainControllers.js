const mainHelper = require('../helpers/mainHelper')

module.exports = {
    home: async (req, res) => {
        mainHelper.fetchAllMeals()
          .then((meals) => {
            res.status(200).json(meals);
          })
          .catch((error) => {
            res.status(500).json({ error: error }); 
          });
      },

    order: async (req,res) =>{
      const order = req.body;
      mainHelper.orderMeal(order)
      .then(async (order)=>{
      await mainHelper.clearCart(order.user);
        res.status(200).json(order)
      })
      .catch((error)=>{
        res.status(203).json({error: error})
      })
    },
    getUserOrders: async(req,res) => {
      const userId = req.params.userId;
      if(!userId) return res.status(403);
        await mainHelper.fetchUserOrders(userId).then((orders)=>{
          res.status(200).json(orders)
        })
        .catch((error)=>{
          res.status(400).json({error: error})
        })
    },

    getCart: async (req, res)=>{
      const userId = req.params.userId;
      if(!userId) return res.status(403);
      mainHelper.getCartContent(userId).then((cart)=>{
        res.status(200).json(cart)
      })
      .catch((error)=>{
        res.status(203).json({error: error})
      })
    },

    addToCart: async (req, res)=>{
      const meal = req.params.mealId;
      const userId = req.params.userId;

      mainHelper.addToCart(userId, meal).then((cart)=>{
        res.status(200).json(cart)
      })
      .catch((error)=>{
        res.status(203).json({error: error})
      })
    },

    getMealById: async (req, res)=>{
      const mealId = req.params.mealId;
      mainHelper.getMealById(mealId).then((meal)=>{
        res.status(200).json(meal)
      })
      .catch((error)=>{
        res.status(203).json({error: error})
      })
    },





    updateOrder: async(req,res)=>{
      const orderId = req.params.orderId;
      const update = req.body;
      await mainHelper.updateOrder(orderId, update).then((order)=>{
          res.status(200).json(order)
        })
        .catch((error)=>{
          res.status(400).json({error: error})
        })
    },
    createMeal: async (req,res)=>{
        const meal = req.body;
        const createdMeal = await mainHelper.createMeal(meal);
        createdMeal
        ?   res.status(201).json(meal)
        :   res.status(203).json(error)
    },

    deleteMeal: async (req,res)=>{
        const itemId = req.params.id;
        await mainHelper.deleteMeal(itemId).then((deletedMeal)=>{
            res.status(200).json(deletedMeal);
        })
        .catch((error)=>{
            res.status(400).json({error});
        })
            
          
    }
}