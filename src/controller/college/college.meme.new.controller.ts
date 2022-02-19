import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function CollegeMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("college meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/CollegeMemes/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("college meme sent! :new")
    return res.json(datas);
}