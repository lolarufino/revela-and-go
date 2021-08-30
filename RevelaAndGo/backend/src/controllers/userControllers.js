const User = require('../models/userModel');

const createUser = async ({ body }, res) => {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getUserById = async ({ params: { userId } }, res) => {
  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteById = async ({ params: { userId } }, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.json(deletedUser);
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
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  createUser,
  getUserById,
  deleteById,
  updateUser
};
