import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String
        , require: [true, "Email is required"]
        , unique: [true, "Email already exist"]
    }

    , password: {
        type: String
        , require: [true, "Password is required"]
    }
});

const User = model("User", userSchema);

export default User;