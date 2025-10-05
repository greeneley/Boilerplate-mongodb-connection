import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";

dotenv.config();

const app = express();

const mongoConnection = connectDB;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running in ${PORT} port`)
})