import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { AnySchema } from "yup";

const validationData : Function = (schema: AnySchema) => 
    async (req: Request, res: Response, next: NextFunction) =>{
        const body = req.body;
        try{
            await schema.validate(body)
            logger.info("Data is Valid.");
            return next();
        }catch (error) {
            console.error("Error: ", error)
            return res.status(400).json({error: error})
        }  

} 

export default validationData;