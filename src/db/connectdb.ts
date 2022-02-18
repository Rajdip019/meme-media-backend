import mongoose from "mongoose";
import config from 'config';
import {logger} from "../logger";

function connect(): Promise<void> {
    const dbUri = config.get("dbUri") as string;
    logger.info(dbUri)

    return mongoose.connect(dbUri).then(() => {
        logger.info("Database Connected");
    }).catch((error) => {
        logger.error("db error", error)
        process.exit(1)
    })
}

export default connect;