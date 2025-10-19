import jwt from "jsonwebtoken";

export async function GenerateToken(userData){
    const payload = {
        email: userData.email
        , id: userData._id
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "2h"});

    return token;
}