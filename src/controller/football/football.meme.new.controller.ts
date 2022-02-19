import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function footballMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("football meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/footballmemes/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("football meme sent! :new")
    return res.json(datas);
}