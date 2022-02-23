import mongoose from "mongoose";
import config from 'config';
import {logger} from "../logger";

async function connect(): Promise<void> {
    logger.info("Connecting to database...")
    const dbUri = config.get("dbUri") as string;

    try {
        await mongoose.connect(dbUri);
        logger.info("Connected to Mongogb cluster.");
    } catch (error) {
        logger.error("Error while connecting to mongodb cluster.", error);
        process.exit(1);
    }
}

export default connect;