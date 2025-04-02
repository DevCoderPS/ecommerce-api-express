import express from 'express';
import { connectDB } from './config/database';
import { connectRedis } from './cache/redis';

const app = express();

// Database connection
connectDB();
connectRedis();

// Routes

export default app;
