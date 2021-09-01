const { Router } = require('express');
const {
  createUser,
  getUserById,
  deleteById,
  updateUser
} = require('../controllers/userControllers');

const userProtectedRouter = new Router();

userProtectedRouter
  .route('/')
  .post(createUser);

userProtectedRouter
  .route('/:userId')
  .get(getUserById)
  .delete(deleteById)
  .put(updateUser);

module.exports = userProtectedRouter;
