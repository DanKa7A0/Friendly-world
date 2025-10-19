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
        res.cookie("auth", token).redirect("/");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("auth/register", {errMsg, userData});
    }
});


authController.get("/login", (req, res) => {
    res.render("auth/login");
});

authController.post("/login", async (req, res) => {
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

export default authController;