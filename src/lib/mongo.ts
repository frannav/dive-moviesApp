import mongoose, { MongooseOptions } from "mongoose";
import { config } from "../config";

const { dbUser, dbPassword, dbName } = config.db;

const mongoDbUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.iesxnn6.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const mongooseOptions: MongooseOptions = {};

export const dbConnection = async () => {
  try {
    const db = await mongoose.connect(mongoDbUrl, mongooseOptions);
    console.log({
      message: "Connected to MongoDB",
      dbName: db.connections[0].name,
    });
  } catch (error) {
    console.error(error);
  }
};
