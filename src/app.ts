import { logger } from "./logger";
import express from 'express';
import config from 'config';
import connectiondb from "./db/connectdb";
import { Request, Response } from "express";


//All Controllers
import codingMeme from "./controller/coding-meme.controller";

//App config retiving
const port: number = config.get("port") as number;
const host: string = config.get("host") as string;

//Config Express in App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello there, this is Meme Media Backend Server Rest API built with node, typescript, express and many more!");
})

app.get("/coding-meme", codingMeme)

app.listen(port, host, () => {
    logger.info(`Server started at http://${host}:${port}`);
})
