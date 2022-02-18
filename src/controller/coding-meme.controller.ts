import { Request, Response } from "express"
import fetch from 'node-fetch'

export default async function codingMeme(req: Request, res: Response){
    const response = await fetch("https://www.reddit.com/r/programmingmemes.json");
    const data : Response = await response.json();
    return res.json(data);
}