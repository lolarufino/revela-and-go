const debug = require('debug')('server');

const chalk = require('chalk');
const { connect } = require('mongoose');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(
  () => debug(chalk.bgMagenta.yellow('Database connection stablished')),
  (error) => debug(chalk.red(error))
);
