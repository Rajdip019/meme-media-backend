import { logger } from "./logger";
import express from 'express';
import config from 'config';
import connectiondb from "./db/connectdb";
import { Request, Response } from "express";
import cors from "cors";


//All Controllers of Meme
import codingMeme from "./controller/programing/coding-meme.controller";
import codingMemeNew from "./controller/programing/coding-meme.new.controller";

import economyMeme from "./controller/economy/economy-meme.controller";
import economyMemeNew from "./controller/economy/economy-meme.new.controller";

import CollegeMeme from "./controller/college/college.meme.controller";
import CollegeMemeNew from "./controller/college/college.meme.new.controller";

import cricketMeme from "./controller/cricket/cricket.meme.controller";
import cricketMemeNew from "./controller/cricket/cricket.meme.new.controller";

import dankMeme from "./controller/dank/dank.meme.controller";
import dankMemeNew from "./controller/dank/dank.meme.new.controller";

import footballMeme from "./controller/football/football.meme.controller";
import footballMemeNew from "./controller/football/football.meme.new.controller";

import gamingMeme from "./controller/gaming/gaming.meme.controller";
import gamingMemeNew from "./controller/gaming/gaming.meme.new.controller";

import generalMeme from "./controller/general/general.meme.controller";
import generalMemeNew from "./controller/general/general.meme.new.controller";

import schoolMeme from "./controller/school/school.meme.controller";
import schoolMemeNew from "./controller/school/school.meme.new.controller";

import socialMeme from "./controller/socialMedia/socialMedia.meme.controller";
import socialMemeNew from "./controller/socialMedia/socialMedia.meme.new.controller";
import handleUser from "./controller/Add_CheckUser";
import addMeme from "./controller/mememedia/addMeme.controller";
import fetchMeme from "./controller/mememedia/fetchMeme.controller";

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

//All Meme Route

app.post("/meme/coding", codingMeme);
app.post("/meme/coding/new", codingMemeNew)

app.post("/meme/economy", economyMeme);
app.post("/meme/economy/new", economyMemeNew)

app.post("/meme/college", CollegeMeme);
app.post("/meme/college/new", CollegeMemeNew)

app.post("/meme/cricket", cricketMeme);
app.post("/meme/cricket/new", cricketMemeNew)

app.post("/meme/dank", dankMeme);
app.post("/meme/dank/new", dankMemeNew)

app.post("/meme/football", footballMeme);
app.post("/meme/football/new", footballMemeNew)

app.post("/meme/gaming", gamingMeme);
app.post("/meme/gaming/new", gamingMemeNew)

app.post("/meme/general", generalMeme);
app.post("/meme/general/new", generalMemeNew)

app.post("/meme/school", schoolMeme);
app.post("/meme/school/new", schoolMemeNew)

app.post("/meme/social", socialMeme);
app.post("/meme/social/new", socialMemeNew)

app.post('/checkuser', handleUser);

app.post('/addmeme', addMeme);
app.get('/meme/mememedia', fetchMeme)


app.listen(port, host, () => {
    logger.info(`Server started at http://${host}:${port}`);
    connectiondb();
})
