import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import animalController from "./controllers/animalController.js";

const router = Router();

router.use(homeController);
router.use(authController);
router.use("/animals", animalController);

router.get("*splat", (req, res) => {
    res.render("404");
});

export default router;