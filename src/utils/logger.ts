import winston from 'winston';

const logger = winston.createLogger({
    level: 'info', // Set the default logging level to 'info'
    format: winston.format.combine(
        winston.format.timestamp(), // Include timestamp in log messages
        winston.format.json(), // Format logs as JSON
    ),
    transports: [
        // Define where to log messages to
        new winston.transports.Console(), // Log to console
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }), // Log error messages to a file
        new winston.transports.File({ filename: 'logs/combined.log' }), // Log to a file
    ],
});

export default logger;
