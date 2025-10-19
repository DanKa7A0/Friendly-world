import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrMsg } from "../utils/errorUtil.js";
import { animalService } from "../services/index.js";

const animalController = Router();

animalController.get("/create", isAuth, (req, res) => {
    res.render("animals/create");
});

animalController.post("/create", isAuth, async (req, res) => {
    const animalData = req.body;
    const userData = req.user;
    try {
        await animalService.createAnimal(animalData, userData);
        res.redirect("/dashboard");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("animals/create", {errMsg, animalData});
    }
});

export default animalController;