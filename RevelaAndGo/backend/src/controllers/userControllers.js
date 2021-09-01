/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/userModel');

const refreshTokens = [];

const createUser = async ({ body }, res) => {
  try {
    const newUser = await User.create(body);
    res.send(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getUserById = async ({ params: { userId } }, res) => {
  try {
    const user = await User.findById(userId)
      .populate({ path: 'favoriteLabs', select: ['name'] });
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteById = async ({ params: { userId } }, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.send(deletedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { body } = req;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.send(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const userRegistration = (req, res) => {
  res.send({
    user: req.user,
    message: 'Register works'
  });
};

const userLogin = async (req, res, next) => {
  passport.authenticate(
    'login',
    async (err, user) => {
      try {
        if (err || !user) {
          const error = new Error('An error occurred.');
          return next(error);
        }
        return req.login(
          user,
          { session: false },
          async (error) => {
            if (error) return next(error);

            const data = { _id: user._id, email: user.email };

            const token = jwt.sign(
              { user: data },
              process.env.JWT_SECRET,
              { expriesIn: '1m' }
            );
            const refreshToken = jwt.sign(
              { user: data },
              process.env.JWT_TOKEN
            );
            refreshTokens.push(refreshToken);

            return res.json({ token, refreshToken });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(res, res, next);
};

module.exports = {
  createUser,
  getUserById,
  deleteById,
  updateUser,
  userRegistration,
  userLogin
};
