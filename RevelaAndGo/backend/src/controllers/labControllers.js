const Lab = require('../models/labModel');

const getAllLabs = async ({ query }, res) => {
  try {
    const labs = await Lab.find(query);
    res.send(labs);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getLabById = async ({ labId }, res) => {
  try {
    const lab = await Lab.findById(labId);
    res.send(lab);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  getAllLabs,
  getLabById
};
