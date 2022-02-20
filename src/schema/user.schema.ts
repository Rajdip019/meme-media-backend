import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userid : {
        type: String,
        required: true,
    },
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    image : {
        type: String,
        required: true,
    },
    yourMeme : {
        type: Array
    },
    favourite : {
        type: Array,
    },
    downloads : {
        type: Array
    }
})


export default UserSchema