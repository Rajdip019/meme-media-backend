import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function cricketMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("cricket meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/CricketShitpost/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("cricket meme sent! :new")
    return res.json(datas);
}