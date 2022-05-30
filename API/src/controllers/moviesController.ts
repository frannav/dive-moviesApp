import { Actor } from "../models/actors";
import { Movie } from "../models/movies";

export const getAllMovies = async (_req: any, res: any) => {
  try {
    const movies = await Movie.find({}).populate("cast");

    return res.status(200).send(movies);
  } catch (error) {
    return console.error(error);
  }
};
export const addMovie = async (req: any, res: any) => {
  try {
    const { title, category, cast } = req.body as any;

    const movieRegistered = await Movie.findOne({ title: title });

    if (movieRegistered) {
      return res.status(400).send({
        message: "Movie already registered",
      });
    }

    cast.forEach(async (actorId: string) => {
      const actorRegistered = await Actor.find({ _id: actorId });

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
};
export const getPerformances = async (req: any, res: any) => {
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
};
