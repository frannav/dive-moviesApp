import express from "express";
import {
  addActor,
  getAllActors,
  getCommonActors,
} from "../controllers/actorsControllers";
const router = express.Router();

router.get("/", async (req, res) => getAllActors(req, res));

router.post("/", async (req, res) => addActor(req, res));

router.get("/common_actors/:movies", async (req, res) =>
  getCommonActors(req, res)
);

export default router;
