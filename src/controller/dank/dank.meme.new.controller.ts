import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function dankMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("dank meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/dankmemes/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("dank meme sent! :new")
    return res.json(datas);
}