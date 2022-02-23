import { Request, Response } from "express";
import Meme from "../../model/meme.model";
import {logger} from "../../logger"

export default async function fetchMeme(req:Request, res: Response) {
    try{
        const meme = await Meme.find().then((memes) => {
            res.status(201).json(memes)
        });
        logger.info("Meme Media exclusive Meme Fetched.")
        return {status: "success"}
    }catch(e){
        logger.error("Error:, e");
        return {status: "failed"}
    }
}