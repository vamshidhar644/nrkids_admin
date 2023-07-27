const express = require('express');

// controller functions
const {
  signupUser,
  loginUser,
  changepass,
} = require('../controller/adminController');

const {
  getAllOrders,
  getOrders,
  updateOrder,
} = require('../controller/OrdersController');

const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

// login / signup route
router.post('/login', loginUser);
router.post('/signup', requireAuth, signupUser);
router.post('/changepass/:adminId', requireAuth, changepass);

// Orders
router.get('/orders', requireAuth, getAllOrders);
router.get('/order/:userId', requireAuth, getOrders);
router.put('/orders/:orderId', requireAuth, updateOrder);

module.exports = router;
