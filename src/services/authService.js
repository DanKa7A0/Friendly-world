import User from "../models/User.js";

export function register(userData) {    
    if (userData.password !== userData.rePassword){
        throw new Error("Passwords don't match");
    }

    const result = User.create(userData);

    return result;
}