import { logger } from "./logger";
import express from 'express';
import config from 'config';
import connectiondb from "./db/connectdb";
import { Request, Response } from "express";
import cors from "cors";


//All Controllers
import codingMeme from "./controller/meme/coding-meme.controller";
import codingMemeNew from "./controller/meme/coding-meme.new.controller";

//Importing all routes


//App config retiving
const port: number = config.get("port") as number;
const host: string = config.get("host") as string;

//Config Express in App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin: "http://localhost:3000"
}))

app.get("/", (req: Request, res: Response) => {
    res.send("Hello there, this is Meme Media Backend Server Rest API built with node, typescript, express and many more!");
})

app.post("/meme/coding", codingMeme);
app.post("/meme/coding/new", codingMemeNew)

app.listen(port, host, () => {
    logger.info(`Server started at http://${host}:${port}`);
    connectiondb();
})
