const { Router } = require('express');
const passport = require('passport');
const {
  createUser,
  getUserById,
  deleteById,
  updateUser,
  userRegistration,
  userLogin
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

userRouter
  .route('/register', passport.authenticate('signup', { session: false }))
  .post(userRegistration);

userRouter
  .route('/login')
  .post(userLogin);

module.exports = userRouter;
