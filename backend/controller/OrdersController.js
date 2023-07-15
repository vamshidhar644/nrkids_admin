const mongoose = require('mongoose');
const Order = require('../model/ordersModel');

// GET all Order
const getAllOrders = async (req, res) => {
  try {
    const documents = await Order.find({});

    res.json(documents);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// GET all Order by userId
const getOrders = async (req, res) => {
  const userId = req.params.userId;
  const orders = await Order.find({ userId }).sort({ createdAt: -1 });
  res.status(200).json(orders);
};

// delete a order
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.id.status(404).json({ error: 'No such order' });
  }

  const order = await Order.findOneAndDelete({ _id: id });
  if (!order) {
    return res.id.status(404).json({ error: 'No such order' });
  }

  res.status(200).json(order);
};

// update a order
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { status, shippingCost } = req.body;

    // Update the order in the database
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: { status, shippingCost } },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllOrders,
  getOrders,
  deleteOrder,
  updateOrder,
};
