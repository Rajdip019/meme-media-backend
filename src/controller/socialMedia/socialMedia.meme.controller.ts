import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function socialMeme(req: Request, res: Response){
    let after = req.body.after;
    logger.info("social meme requested...")
    const response = await fetch(`https://www.reddit.com/r/indianpeoplefacebook.json?after=${after}`);
    const datas = await response.json();
    logger.info("social meme sent!")
    return res.json(datas);
}