import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function schoolMeme(req: Request, res: Response){
    let after = req.body.after;
    logger.info("school meme requested...")
    const response = await fetch(`https://www.reddit.com/r/school_memes.json?after=${after}`);
    const datas = await response.json();
    logger.info("school meme sent!")
    return res.json(datas);
}