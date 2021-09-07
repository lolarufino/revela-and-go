/* eslint-disable no-underscore-dangle */
const Cart = require('../models/cartModel');

const createCart = async ({ body }, res) => {
  try {
    const cart = await Cart.create(body);
    const newCart = await Cart.findById(cart._id)
      .populate('services');
    res.send(newCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getCartById = async ({ params: { cartId } }, res) => {
  try {
    const cart = await Cart.findById(cartId)
      .populate('services');
    res.send(cart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateCartById = async (req, res) => {
  const { cartId } = req.params;
  const { body } = req;
  try {
    const updatedCart = await Cart.findByIdAndUpdate(cartId, { $addToSet: body }, { new: true })
      .populate('services');
    res.send(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteCartById = async ({ params: { cartId } }, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    res.send(deletedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createCart,
  getCartById,
  updateCartById,
  deleteCartById
};
