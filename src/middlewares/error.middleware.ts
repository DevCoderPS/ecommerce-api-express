import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { HttpStatus } from '../utils/httpStatus';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    logger.error(`Error: ${err.message}`); // Log the error stack trace for debugging

    let code = 500; // Default to 500 server error
    let message = 'Something went wrong'; // Default error message

    // Handle specific error types
    if (err.name === 'ValidationError') {
        code = HttpStatus.BAD_REQUEST;
        message = 'Validation error';
    } else if (err.name === 'UnauthorizedError') {
        code = HttpStatus.UNAUTHORIZED;
        message = 'Unauthorized access';
    } 

    // Default to 500 server error
    res.status(code).json({ message });
};

export default errorHandler;
