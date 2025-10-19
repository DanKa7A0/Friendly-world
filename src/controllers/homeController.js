import { Router } from "express";
import { getAnimalsHome } from "../services/animalService.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
    const animals = await getAnimalsHome();
    console.log(animals);
    res.render("home", {animals});
});

export default homeController;