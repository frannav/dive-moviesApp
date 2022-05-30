import { Actor } from "../models/actors";
import { Movie } from "../models/movies";

enum actorGender {
  Male = "Male",
  Female = "Female",
}

export const getAllActors = async (_req: any, res: any) => {
  try {
    const actors = await Actor.find({});

    return res.status(200).send(actors);
  } catch (error) {
    return console.error(error);
  }
};

export const addActor = async (req: any, res: any) => {
  try {
    const { name, age, gender } = req.body as any;

    if (!name || !age || !gender) {
      return res.status(422).send({
        message: "Body is malformed",
      });
    }

    const actorAlreadyRegisterd = await Actor.findOne({ name });

    if (actorAlreadyRegisterd) {
      return res.status(400).send({
        message: "Actor already registered",
      });
    }

    if (age < 0) {
      return res.status(400).send({
        message: "Age can't be negative",
      });
    }

    if (gender === actorGender.Female || gender === actorGender.Male) {
    } else {
      res.status(400).send({
        message: `${gender} is not Male or Female`,
      });
    }

    const newActor = new Actor({
      name,
      age,
      gender,
    });

    await newActor.save();

    return res.status(200).send(newActor);
  } catch (error: any) {
    if (error.name === "ValidationError") return;
    return console.error(error);
  }
};

export const getCommonActors = async (req: any, res: any) => {
  try {
    let commonActorsIds: string[] = [];
    const moviesArray: string[] = req.params.movies.split(",");

    let movieExists = await Movie.find({ _id: { $in: moviesArray } });

    if (movieExists.length !== moviesArray.length) {
      return res.status(400).send({
        message: "At least one of the movies does not exist",
      });
    }

    let commonActors = await Movie.find({
      _id: { $in: moviesArray },
    }).distinct("cast");

    commonActors.forEach((actor) => {
      commonActorsIds.push(actor.toString());
    });

    const commonActorsIdsPopulated = await Actor.find({
      _id: { $in: commonActorsIds },
    });

    return res.status(200).send(commonActorsIdsPopulated);
  } catch (error) {
    return console.error(error);
  }
};
