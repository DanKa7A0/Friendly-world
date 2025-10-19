import { Router } from "express";
import { animalService } from "../services/index.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
    const animals = await animalService.getAnimalsHome();
    res.render("home", {animals});
});

homeController.get("/dashboard", async (req, res) => {
    const animals = await animalService.getAnimals();
    res.render("dashboard", {animals});
});

export default homeController;