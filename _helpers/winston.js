const appRoot = require('app-root-path');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({
      filename: `${appRoot}/logs/error.log`,
      level: 'error'
    }),
    new winston.transports.File({
      filename: `${appRoot}/logs/combined.log`
    }),
    new winston.transports.Console({
      level: 'debug',
      prettyPrint: true,
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;