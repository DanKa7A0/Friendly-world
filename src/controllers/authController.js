import { Router } from "express";
import { authService } from "../services/index.js";
import { getErrMsg } from "../utils/errorUtil.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get("/register", isGuest, (req, res) => {
    res.render("auth/register");
});

authController.post("/register", isGuest, async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.register(userData);
        res.cookie("auth", token).redirect("/");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("auth/register", {errMsg, userData});
    }
});

authController.get("/login", isGuest, (req, res) => {
    res.render("auth/login");
});

authController.post("/login", isGuest, async (req, res) => {
    const userData = req.body;
    try {
        const token = await authService.login(userData);
        res.cookie("auth", token).redirect("/");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("auth/login", {errMsg, userData});
    }
});

authController.get("/logout", isAuth, (req, res) => {
    res.clearCookie("auth").redirect("/");
});

export default authController;