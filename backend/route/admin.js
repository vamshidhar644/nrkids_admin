const express = require('express');

// controller functions
const { signupUser, loginUser } = require('../controller/adminController');

const router = express.Router();

// login / signup route
router.post('/login', loginUser);
router.post('/signup', signupUser);

module.exports = router;
