import { Request, Response } from "express";
import { logger } from "../../logger";
import Meme from "../../model/meme.model";

export default async function addMeme(req: Request, res: Response) {
    const {title, url_overridden_by_dest, authorId, authorImage, authorName} = req.body;
    if(!url_overridden_by_dest || !authorId || !authorImage || !authorName){ 
        logger.error("Insufficient data.")
        return {error: "Data Insufficient"}
    }else{
        try{
            const newMeme = await new Meme({
                title,
                url_overridden_by_dest,
                authorId,
                authorImage,
                authorName
            })
            await newMeme.save();
            logger.info("Meme Added to db");
            res.json({success: true})
        }catch(e){
            logger.error("Some Error occoured" , e);
            return {error : "Some error occoured"}
        }
    }
}