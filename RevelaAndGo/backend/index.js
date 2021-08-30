require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5000;

require('./src/config/moongoseConfig');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRouter');
const labRouter = require('./src/routes/labRouter');

server.use('/api/user', userRouter);
server.use('/api/lab', labRouter);

server.listen(port, () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`));
