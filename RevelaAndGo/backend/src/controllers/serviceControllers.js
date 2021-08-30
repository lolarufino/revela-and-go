const Service = require('../models/serviceModel');

const createService = async ({ body }, res) => {
  try {
    const service = await Service.create(body);
    res.send(service);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = { createService };
