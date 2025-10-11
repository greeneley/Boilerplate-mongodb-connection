import mongoose from 'mongoose';
import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();

const mongoUri = process.env.MONGODB_URI as string;

if (!mongoUri) {
    throw new Error("Missing MONGODB_URI in .env");
}

export const connectDB = async(): Promise<void> => {
    try {
        await mongoose.connect(mongoUri);
        console.log("Mongodb connected");
    } catch(error) {
        console.error("MongoDB connection error::: ", error);
        process.exit(1);
    }
}