import { Request, Response } from "express"
import { logger } from "../../logger";
import User from "../../model/user.model";
    


export default async function handleUser(req: Request, res: Response){
    const {name, email, id, image} = req.body;
    if(!name || !email || !id || !image){
        logger.fatal("Insufficient Data.");
        return {error: "Data error"} //Checking if all data is send from front end
    }else{
        const UserDetails = await User.findOne({email: email}) //Finding user with same email id
        if(UserDetails === null){
            const newUser = await new User({ //Ading new user if no User found with same email
                userid: id,
                name: name,
                email: email,
                image: image
            }).save();
            logger.info("User Signed In and successfully added to collection");
            return {success : "User Exists"}
        }else{
            logger.warn("User already exists.")
            return {exists : "User exists"} //returning if user is found.
        }
    }
}
