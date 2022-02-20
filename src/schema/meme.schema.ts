import mongoose from "mongoose";

const MemeSchema = new mongoose.Schema({
        title: {
            type: String,
        },
        url_overridden_by_dest: {
            type: String,
            required: true,
        },
        authorId: {
            type: String,
            required: true,
        },
        authorImage: {
            type: String,
            required: true,
        },
        authorName: {
            type: String,
            required: true,
        },
        timeStamp: {
            type: Date,
            required: true,
            default: Date.now()
        }
})

export default MemeSchema