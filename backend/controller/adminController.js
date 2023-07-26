const User = require('../model/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

const changepass = async (req, res) => {
  const { adminId } = req.params;
  const { oldpassword, newpassword } = req.body;

  // console.log(adminId, oldpassword, newpassword);
  const user = await User.findById(adminId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passWord = user.password;

  const match = await bcrypt.compare(oldpassword, passWord);

  if (!match) {
    return res.status(404).json({ message: 'Incorrect password' });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newpassword, salt);

  try {
    // Find the document by ID and update the specific field
    const updatedItem = await User.findByIdAndUpdate(
      adminId,
      { $set: { password: hash } },
      {
        new: true, // Return the updated document after the update
      }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    return res.status(200).json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  signupUser,
  loginUser,
  changepass,
};
