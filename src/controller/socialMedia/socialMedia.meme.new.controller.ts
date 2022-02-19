import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function socialMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("social meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/indianpeoplefacebook/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("social meme sent! :new")
    return res.json(datas);
}