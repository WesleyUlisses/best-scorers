import { Router } from "express";
import PlayerController from "../controllers/player-controller";

const playerRoutes = Router();
const playerController = new PlayerController();

playerRoutes.post(
    "/create",
    (req, res) => playerController.create(req, res)
);

playerRoutes.put(
    "/update",
    (req, res) => playerController.update(req, res)
);

playerRoutes.put(
    "/updateGoals/:id",
    (req, res) => playerController.updateGoals(req, res)
);

playerRoutes.delete(
    "/delete/:id",
    (req, res) => playerController.delete(req, res)
);

playerRoutes.get(
    "/get/:id",
    (req, res) => playerController.get(req, res)
);

playerRoutes.get(
    "/getAll",
    (req, res) => playerController.getAll(req, res)
);

playerRoutes.get(
    "/getBestScorer",
    (req, res) => playerController.getBestScorer(req, res)
);

playerRoutes.get(
    "/getBestAssistant",
    (req, res) => playerController.getBestAssistant(req, res)
);

playerRoutes.get(
    "/getScorerList",
    (req, res) => playerController.getScorerList(req, res)
);

playerRoutes.get(
    "/getAssistantList",
    (req, res) => playerController.getAssistantList(req, res)
);

export default playerRoutes;
