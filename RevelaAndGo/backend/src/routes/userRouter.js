const { Router } = require('express');
const {
  createUser,
  getUserById,
  deleteById,
  updateUser
} = require('../controllers/userControllers');

const userRouter = new Router();

userRouter
  .route('/')
  .post(createUser);

userRouter
  .route('/:userId')
  .get(getUserById)
  .delete(deleteById)
  .put(updateUser);

module.exports = userRouter;
