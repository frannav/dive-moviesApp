import express from "express";
import cors from "cors";
import { config } from "./config";
import { dbConnection } from "./lib/mongo";
import moviesRoutes from "./routes/moviesRouter";
import actorsRouter from "./routes/actorsRouter";

const { port } = config;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRoutes);
app.use("/api/actors", actorsRouter);

app.listen(port, async () => {
  console.log("Connecting to db...");
  await dbConnection();
  console.log(`Server is listening on port ${port}`);
});
