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

// const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

// login / signup route
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/changepass/:adminId', changepass);

// Orders
router.get('/orders', getAllOrders);
router.get('/order/:userId', getOrders);
router.put('/orders/:orderId', updateOrder);

module.exports = router;
