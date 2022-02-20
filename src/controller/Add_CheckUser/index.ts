import { Request, Response } from "express"
import { logger } from "../../logger";
import User from "../../model/user.model";
    


export default async function handleUser(req: Request, res: Response){
    const {name, email, id, image} = req.body;
    if(!name || !email || !id || !image){
        logger.fatal("Insufficient Data.");
        return {error: "Data error"}
    }else{
        const UserDetails = await User.findOne({email: email})
        if(UserDetails === null){
            const newUser = await new User({
                userid: id,
                name: name,
                email: email,
                image: image
            }).save();
            logger.info("User Signed In and successfully added to collection");
            return {success : "User Exists"}
        }else{
            logger.warn("User already exists.")
            return {exists : "User exists"}
        }
    }
}
