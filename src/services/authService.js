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