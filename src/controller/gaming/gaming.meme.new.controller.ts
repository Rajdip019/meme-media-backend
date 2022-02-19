import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function gamingMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("gaming meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/gamingmemes/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("gaming meme sent! :new")
    return res.json(datas);
}