import express from "express";
import { createChampionlol, getChampionslol, getChampionlol, updateChampionlol, deleteChampionlol } from "../controllers/ChampionlolControllers.js";

const router = express.Router();

router.post("/", createChampionlol);
router.get("/:id", getChampionlol);
router.get("/", getChampionslol);
router.put("/:id", updateChampionlol); 
router.delete("/:id", deleteChampionlol);

export default router;
