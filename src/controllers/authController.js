import { Router } from "express";
import { authService } from "../services/index.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register");
});

authController.post("/register", async (req, res) => {
    const userData = req.body;
    try {
        await authService.register(userData);
        res.end();
    }
    catch(error){
        res.render("auth/register", {error, userData});
    }
});

export default authController;