import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function dankMeme(req: Request, res: Response){
    let after = req.body.after;
    logger.info("dank meme requested...")
    const response = await fetch(`https://www.reddit.com/r/dankmemes.json?after=${after}`);
    const datas = await response.json();
    logger.info("dank meme sent!")
    return res.json(datas);
}