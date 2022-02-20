import mongoose from "mongoose";
import MemeSchema from "../schema/meme.schema";

const Meme = mongoose.model("Meme", MemeSchema);

export default Meme