import { Request, Response } from "express"
import fetch from 'node-fetch'
import { logger } from "../../logger";
    


export default async function codingMemeNew(req: Request, res: Response){
    let after = req.body.after;
    logger.info("Coding meme requested... : new")
    const response = await fetch(`https://www.reddit.com/r/programmingmemes/new.json?after=${after}`);
    const datas = await response.json();
    logger.info("Coding meme sent! :new")
    return res.json(datas);
}