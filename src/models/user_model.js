import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: 'https://genpartners.genvita.vn/Content/images/avatar.png'
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true, });

export const UserModel = mongoose.model('UserModel', UserSchema);