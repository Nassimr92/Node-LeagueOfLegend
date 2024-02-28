import express from "express";
import champion from "./routes/ChampionlolRoutes.js"; 
import authRoutes from "./routes/AuthRoutes.js"; 

const router = express.Router();

router.use("/championslol", champion);
router.use("/auth", authRoutes); 

export default router;
