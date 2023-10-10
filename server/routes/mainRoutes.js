const { Router } = require('express');
const router = Router();
const mainController = require('../controllers/mainControllers')

// get all meals
router.get('/', mainController.home);

// order something
router.post('/order/', mainController.order)

// get user orders
router.get('/order/:userId', mainController.getUserOrders)

// update order
router.patch('/order/:orderId', mainController.updateOrder);

// add to cart
router.put('/cart/add/:mealId/:userId', mainController.addToCart)

// delete from cart 
router.put('/cart/delete/:mealId/:userId', mainController.deleteFromCart)

//  get cart content
router.get('/cart/:userId',mainController.getCart);

// get meal infos
router.get('/meal/:mealId',mainController.getMealById) 

router.put('/cart/saveCart/:userId', mainController.saveCart)

// admin API 
router.post('/admin/createMeal', mainController.createMeal)
router.delete('/admin/meals/:id', mainController.deleteMeal);
module.exports = router;