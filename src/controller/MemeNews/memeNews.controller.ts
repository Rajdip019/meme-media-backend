import express from "express"
import { Request, Response } from "express"
import 'dotenv/config'
import fetch from "node-fetch"
import { logger } from "../../logger"


export default async function handleMemeNews(req: Request, res: Response){
    try{
        logger.info("Meme News Requested");
        const response = await fetch("https://api.bing.microsoft.com/v7.0/search?q=memenews", {
            headers: {
                "Ocp-Apim-Subscription-Key": process.env.SEARCH_API_KEY as string
              },
        })
        const news = await response.json();
        res.json(news);
        logger.info("Meme news Request Sent");
        return {success : "meme news sent"}
    }catch(e){
        logger.error("error sending Meme request. Error: ", e)
        res.json({error : "error occoured", e})
        return {error : e}
    }
}

