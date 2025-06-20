import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export class Database {
    private static instance: Database;
    private constructor() {}

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async connect(): Promise<void> {
        try {
            const mongoUri = process.env.MONGODB_URI;
            if (!mongoUri) {
                throw new Error('MongoDB URI is not defined in environment variables');
            }

            await mongoose.connect(mongoUri);
            console.log('Connected to MongoDB successfully');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1);
        }
    }
} 