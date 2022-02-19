import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function generalMeme(req: Request, res: Response){
    let after = req.body.after;
    logger.info("general meme requested...")
    const response = await fetch(`https://www.reddit.com/r/memes.json?after=${after}`);
    const datas = await response.json();
    logger.info("general meme sent!")
    return res.json(datas);
}