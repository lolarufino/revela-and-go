const { Router } = require('express');
const { createService } = require('../controllers/serviceControllers');

const serviceRouter = new Router();

serviceRouter
  .route('/')
  .post(createService);

module.exports = serviceRouter;
