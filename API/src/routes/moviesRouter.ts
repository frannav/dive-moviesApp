import express from "express";
import { Movie } from "../models/movies";
import { Actor } from "../models/actors";
const router = express.Router();

interface IMovie {
  title: string;
  category: string;
  cast: string[];
}

router.get("/", async (_req, res) => {
  try {
    const movies = await Movie.find({});

    return res.status(200).send(movies);
  } catch (error) {
    return console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, category, cast } = req.body as IMovie;

    if (!title || !category || !cast) {
      return res.status(422).send({
        message: "Body is malformed",
      });
    }

    const movieRegistered = await Movie.findOne({ title: title });

    if (movieRegistered) {
      return res.status(400).send({
        message: "Movie already registered",
      });
    }

    cast.forEach(async (actorId) => {
      console.log(actorId);
      const actorRegistered = await Actor.findOne({ _id: actorId });

      await Movie.find();
      if (!actorRegistered) {
        return res.status(400).send({
          message: `${actorId} not registered`,
        });
      } else {
      }

      return;
    });

    const newMovie = new Movie({
      title,
      category,
      cast,
    });

    await newMovie.save();
    return res.status(200).send(newMovie);
  } catch (error: any) {
    if (error.name === "ValidationError") return;
    return console.error(error);
  }
});

router.get("/performances/:actors", async (req, res) => {
  try {
    const namesArray: string[] = req.params.actors.split(",");

    let actorExists = await Actor.find({ _id: { $in: namesArray } });

    if (actorExists.length !== namesArray.length) {
      return res.status(400).send({
        message: "At least one of the actors does not exist",
      });
    }

    let performances = await Movie.find({ cast: { $in: namesArray } });

    return res.status(200).send(performances);
  } catch (error) {
    return console.error(error);
  }
});
export default router;
