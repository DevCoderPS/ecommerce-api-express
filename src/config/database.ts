import mongoose from 'mongoose';
import config from './config';
import logger from '../utils/logger';

const connectDB = async () => {
    try {
        await mongoose.connect(config.dbUrl);
        logger.info('MongoDB connected successfully');
    } catch (error) {
        logger.error(`MongoDB connection error: ${error}`);
        process.exit(1);
    }
};

export { connectDB };
