const Cart = require('../models/cartModel');

const createCart = async ({ query }, res) => {
  try {
    const cart = await Cart.create(query);
    res.send(cart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getCartById = async ({ params: { cartId } }, res) => {
  try {
    const cart = await Cart.findById(cartId)
      .populate({ path: 'user', select: ['name'] })
      .populate({ path: 'services', select: ['filmType', 'palette', 'scan', 'printed', 'rollBack'] });
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
    const updatedCart = await Cart.findByIdAndUpdate(cartId, body, { new: true });
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
