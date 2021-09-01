require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/moongoseConfig');
require('./src/config/passportConfig')(server);

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const authRouter = require('./src/routes/authRouter');
const userProtectedRouter = require('./src/routes/userProtectedRouter');
const labRouter = require('./src/routes/labRouter');
const cartRouter = require('./src/routes/cartRouter');
const serviceRouter = require('./src/routes/serviceRouter');

server.use('/api', authRouter);
server.use('/api/user', userProtectedRouter);
server.use('/api/lab', labRouter);
server.use('/api/cart', cartRouter);
server.use('/api/service', serviceRouter);

server.listen(port, () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`));
