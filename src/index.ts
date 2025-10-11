import express from "express";
import * as dotenv from "dotenv";
import {connectDB} from "./db";

dotenv.config();

const app = express();

const startServer = async () => {
    await connectDB();
}
startServer();
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`server running in ${PORT} port`)
})

