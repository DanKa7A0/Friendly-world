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
        await authService.register(userData);
        res.redirect("/");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("auth/register", {errMsg, userData});
    }
});

export default authController;