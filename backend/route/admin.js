const express = require('express');

// controller functions
const { signupUser, loginUser } = require('../controller/adminController');

const {
  getAllOrders,
  getOrders,
  deleteOrder,
  updateOrder,
} = require('../controller/OrdersController');

const router = express.Router();

// login / signup route
router.post('/login', loginUser);
router.post('/signup', signupUser);

// Orders
router.get('/orders', getAllOrders);
router.get('/order/:userId', getOrders);

module.exports = router;
