import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../lib/api";
import styles from "../../styles/Movies.module.css";
import { Movie } from "../../types";

const Movies: NextPage = () => {
  const [movies, setMovies] = useState([]);

  const getMoviesData = async () => {
    const moviesData = await getAllMovies();
    setMovies(moviesData);
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Get all Movies</h1>
        {movies.map((movie: Movie) => (
          <article className={styles.article} key={movie._id}>
            <h2>Title: {movie.title}</h2>
            <p>Category: {movie.category}</p>
            <p>ID: {movie._id}</p>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Movies;
