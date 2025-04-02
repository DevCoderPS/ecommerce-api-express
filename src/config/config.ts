import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number; // Port for the server to listen on
    dbUrl: string; // MongoDB connection string
    redisUrl: string; // Redis connection string
    jwtSecret: string; // Secret key for JWT signing and encryption
    jwtExpiration: string; // JWT expiration time
    nodeEnv: string; // Node environment (development, production, etc.)
}

const config: Config = {
    port: Number(process.env.PORT) || 5000,
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/ecommerce',
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    jwtExpiration: process.env.JWT_EXPIRATION || '1h',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
