import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function generalMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("general meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/memes/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("general meme sent! :new")
    return res.json(datas);
}