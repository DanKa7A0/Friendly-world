import bcrypt from "bcrypt";
import User from "../models/User.js";
import { GenerateToken } from "../utils/tokenUtil.js";

export async function register(userData) {    
    if (userData.password !== userData.rePassword){
        throw new Error("Passwords don't match");
    }

    const user = await User.create(userData);

    const token = GenerateToken(user);

    return token;
}

export async function login(userData){
    const {email, password} = userData;
    const user = await User.findOne({email});

    if (!user){
        throw new Error("Invalid email or password");
    }

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch){
        throw new Error("Invalid email or password");
    }

    const token = GenerateToken(user);

    return token;
}