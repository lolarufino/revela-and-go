const { Router } = require('express');
const {
  createCart,
  getCartById,
  updateCartById,
  deleteCartById
} = require('../controllers/cartControllers');

const cartRouter = new Router();

cartRouter
  .route('/')
  .post(createCart);

cartRouter
  .route('/:cartId')
  .get(getCartById)
  .put(updateCartById)
  .delete(deleteCartById);

module.exports = cartRouter;
