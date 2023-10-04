const { Router } = require('express');
const router = Router();
const mainController = require('../controllers/mainControllers')

// get all orders
router.get('/', mainController.home);

// order something
router.post('/order/', mainController.order)

// get user orders
router.get('/order/:userId', mainController.getUserOrders)

// update order
router.patch('/order/:orderId', mainController.updateOrder);

// admin API 
router.post('/admin/createMeal', mainController.createMeal)
router.delete('/admin/meals/:id', mainController.deleteMeal);
module.exports = router;