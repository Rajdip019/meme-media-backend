import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function codingMeme(req: Request, res: Response){
    try{
        let after = req.body.after;
        logger.info("Coding meme requested...")
        const response = await fetch(`https://www.reddit.com/r/programmingmemes.json?after=${after}`);
        const datas = await response.json();
        logger.info("Coding meme sent!")
        return res.json(datas);
    }catch(e){
        logger.error("Error getting the data", e);
        return res.json({error: e})
    }
}