import express from "express";
import { getAllMovies, getPerformances } from "../controllers/moviesController";
import { addActor } from "../controllers/actorsControllers";
const router = express.Router();

router.get("/", async (_req, res) => getAllMovies(_req, res));

router.post("/", async (req, res) => addActor(req, res));

router.get("/performances/:actors", async (req, res) =>
  getPerformances(req, res)
);
export default router;
