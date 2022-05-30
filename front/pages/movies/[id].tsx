import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPerformances } from "../../lib/api";
import styles from "../../styles/Movies.module.css";
import { ParsedUrlQuery } from "querystring";

type Movie = {
  _id?: string;
  title: string;
  category: string;
  cast: string[];
};

const Performances: NextPage = () => {
  let apiResponse: Movie[];
  const { query, isReady } = useRouter();

  const [performances, setPerformances] = useState<any[]>([]);

  useEffect(() => {
    const asyncGetPerformances = async () => {
      apiResponse = await getPerformances(query.id as string);
      console.log(apiResponse);
      setPerformances(apiResponse);
    };

    if (isReady) {
      asyncGetPerformances();
    }
  }, [isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Performances of: {query.id}</h1>
        {performances.map((performance: Movie) => (
          <article className={styles.article} key={performance._id}>
            <h2> Title: {performance.title}</h2>
            <p>Category: {performance.category}</p>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Performances;
