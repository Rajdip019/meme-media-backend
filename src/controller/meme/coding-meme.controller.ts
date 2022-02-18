import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";

export default async function codingMeme(req: Request, res: Response){
    logger.info("Coding meme requested...")
    const response = await fetch("https://www.reddit.com/r/programmingmemes.json");
    const data : Response = await response.json();
    logger.info("Coding meme sent!")
    return res.json(data);
}