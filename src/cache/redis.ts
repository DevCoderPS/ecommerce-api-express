import { createClient } from 'redis';
import config from '../config/config';
import logger from '../utils/logger';

const redisClient = createClient({
    url: config.redisUrl,
});

redisClient.on('error', (err) => logger.error('Redis Client Error', err));

const connectRedis = async () => {
    try {
        await redisClient.connect();
        logger.info('Connected to Redis');
    } catch (error) {
        logger.error('Redis connection error:', error);
        process.exit(1); // Exit the process if Redis connection fails
    }
};

const setCache = async (key: string, value: any, expiry?: number) => {
    try {
        const stringValue = JSON.stringify(value);
        if (expiry) {
            await redisClient.setEx(key, expiry, stringValue);
        } else {
            await redisClient.set(key, stringValue);
        }
    } catch (error) {
        logger.error(`Error setting cache: ${error}`);
    }
};

const getCache = async (key: string) => {
    try {
        const data = await redisClient.get(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        logger.error(`Error getting cache: ${error}`);
        return null;
    }
};

const deleteCache = async (key: string) => {
    try {
        await redisClient.del(key);
    } catch (error) {
        logger.error(`Error deleting cache: ${error}`);
    }
};

export { connectRedis, redisClient, setCache, getCache, deleteCache };
