import mongoose from "mongoose";

enum actorGender {
  Male = "Male",
  Female = "Female",
}

const ActorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: { type: String, enum: Object.values(actorGender), required: true },
});

export const Actor = mongoose.model("Actors", ActorSchema);
