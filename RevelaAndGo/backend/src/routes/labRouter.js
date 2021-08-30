const { Router } = require('express');
const {
  getAllLabs,
  getLabById
} = require('../controllers/labControllers');

const labRouter = new Router();

labRouter
  .route('/')
  .get(getAllLabs);

labRouter
  .route('/:labId')
  .get(getLabById);

module.exports = labRouter;
