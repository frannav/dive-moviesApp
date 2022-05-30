import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { addMovie, getAllActors } from "../../lib/api";
import styles from "../../styles/Movies.module.css";
import { Actor, Movie } from "../../types";

const AddMovie: NextPage = () => {
  const [actors, setActors] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [cast, setCast] = useState<string>("");

  const addNewMovie = async (newMovie: Movie) => {
    const responseNewMovie = await addMovie(newMovie);
  };

  const getActorsData = async () => {
    const actorsData = await getAllActors();
    setActors(actorsData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setTitle(e.target[0].value);
    setCategory(e.target[1].value);
    setCast(e.target[2].value);

    let castToArray: string[] = cast.split(",");
    const newMovie: Movie = {
      title: title,
      category: category,
      cast: castToArray,
    };
    console.log("newMovie", newMovie);
    addNewMovie(newMovie);
  };

  useEffect(() => {
    getActorsData();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Add New Movie</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Category:
            <input type="text" name="category" />
          </label>
          <label>
            Cast:
            <input
              type="text"
              name="cast"
              placeholder="Introduce cast ID´s separates by coma"
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <h1>Registered Actors IDS</h1>
        <ul>
          {actors.map((actor: Actor) => (
            <li key={actor._id}>
              <h2>ID: {actor._id}</h2>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default AddMovie;
