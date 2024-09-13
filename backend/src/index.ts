import express, { Request, Response } from "express";
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.get('/api/test', (req : Request, res: Response) => {
    res.json({message: "Hello this app is wokring fine"})
})

app.listen('4000', () => {
    console.log("Application is working on port: 4000")
})