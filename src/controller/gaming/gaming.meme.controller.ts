import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function gamingMeme(req: Request, res: Response){
    let after = req.body.after;
    logger.info("gaming meme requested...")
    const response = await fetch(`https://www.reddit.com/r/gamingmemes.json?after=${after}`);
    const datas = await response.json();
    logger.info("gaming meme sent!")
    return res.json(datas);
}