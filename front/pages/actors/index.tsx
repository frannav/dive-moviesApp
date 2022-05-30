import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllActors } from "../../lib/api";
import styles from "../../styles/Actors.module.css";
import { Actor } from "../../types";

const Actors: NextPage = () => {
  const [actors, setActors] = useState([]);

  const getActorsData = async () => {
    const actorsData = await getAllActors();
    setActors(actorsData);
  };

  useEffect(() => {
    getActorsData();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Get all Actors</h1>
        {actors.map((actor: Actor) => (
          <article className={styles.article} key={actor._id}>
            <h2>Name: {actor.name}</h2>
            <p>Age: {actor.age}</p>
            <p>ID: {actor._id}</p>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Actors;
