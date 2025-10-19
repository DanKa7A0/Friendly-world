import { Router } from "express";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register");
});

authController.post("/register", (req, res) => {
    console.log(req.body);
    res.end();
});

export default authController;