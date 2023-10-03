const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authControllers')


router.get('/login',);
router.post('/login', authController.signup_post);

module.exports = router;