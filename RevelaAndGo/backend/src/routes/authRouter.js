const { Router } = require('express');
const passport = require('passport');
const {
  registerUser,
  loginUser,
  tokenUser,
  logoutUser
} = require('../controllers/authControllers');

const authRouter = new Router();

authRouter
  .post(
    '/register',
    passport.authenticate('signup', { session: false }),
    registerUser
  );

authRouter
  .route('/login')
  .post(loginUser);

authRouter
  .route('/refreshToken')
  .post(tokenUser);

authRouter
  .route('/logout')
  .post(logoutUser);

module.exports = authRouter;
