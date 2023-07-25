const User = require('../model/adminModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    const firstName = user.firstName;
    const lastName = user.lastName;
    const _id = user.id;

    res.status(200).json({ _id, firstName, lastName, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { _id, firstName, lastName, email, password } = req.body;

  try {
    const user = await User.signup(_id, firstName, lastName, email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ _id, firstName, lastName, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const changepass = async (req, res) => {};

module.exports = {
  signupUser,
  loginUser,
  changepass,
};
