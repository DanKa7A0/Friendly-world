import { Router } from "express";
import { authService } from "../services/index.js";
import { getErrMsg } from "../utils/errorUtil.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register");
});

authController.post("/register", async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.register(userData);
        res.status(201).cookie("auth", token).redirect("/");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("auth/register", {errMsg, userData});
    }
});

export default authController;