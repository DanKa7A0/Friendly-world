import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {
        type: String
        , required: [true, "Email is required"]
        , unique: [true, "Email already exist"]
        , minLenght: [10, "Email need to be at least 10 characters long"]
    }

    , password: {
        type: String
        , required: [true, "Password is required"]
        , minLenght: [4, "Password need to be at least 4 characters long"]
    }
});

userSchema.pre("save", async function (){
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;