import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function CollegeMeme(req: Request, res: Response){
    let after = req.body.after;
    logger.info("College meme requested...")
    const response = await fetch(`https://www.reddit.com/r/CollegeMemes.json?after=${after}`);
    const datas = await response.json();
    logger.info("College meme sent!")
    return res.json(datas);
}