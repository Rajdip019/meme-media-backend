import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function cricketMeme(req: Request, res: Response){
    let after = req.body.after;
    logger.info("cricket meme requested...")
    const response = await fetch(`https://www.reddit.com/r/CricketShitpost.json?after=${after}`);
    const datas = await response.json();
    logger.info("cricket meme sent!")
    return res.json(datas);
}