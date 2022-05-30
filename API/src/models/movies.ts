import mongoose from "mongoose";

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  cast: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Actors",
      required: true,
    },
  ],
});

export const Movie = mongoose.model("Movies", MoviesSchema);
