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

animalController.get("/search", async (req, res) => {
    const filter = req.query;
    const animals = await animalService.getAnimals(filter);
    res.render("search", {animals});
});

animalController.get("/details/:id", async (req, res) => {
    const animal_ID = req.params.id;
    const user_ID = req.user?.id;

    const animal = await animalService.getAnimal(animal_ID);
    const isOwner = animal.owner.equals(user_ID);
    const isDonated = animal.donation.some(x => x.equals(user_ID));

    res.render("animals/details", { animal, isOwner, isDonated });
});

animalController.get("/donate/:id", isAuth, async (req, res) => {
    const animal_ID = req.params.id;
    const user_ID = req.user.id;

    await animalService.donateToAnimal(animal_ID, user_ID);
    res.redirect("/animals/details/" + animal_ID);
});

export default animalController;