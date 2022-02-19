import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function schoolMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("school meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/school_memes/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("school meme sent! :new")
    return res.json(datas);
}