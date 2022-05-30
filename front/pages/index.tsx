import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies App</title>
        <meta name="description" content="Movies App Dive.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Movies App</h1>

        <div className={styles.grid}>
          <Link href="/movies">
            <a className={styles.card}>
              <h2>Movies &rarr;</h2>
              <p>Get All Movies</p>
            </a>
          </Link>
          <Link href="/actors">
            <a className={styles.card}>
              <h2>Actors &rarr;</h2>
              <p>Get All Actors</p>
            </a>
          </Link>
          <Link href="/addActor">
            <a className={styles.card}>
              <h2>Add New Actor &rarr;</h2>
              <p>Add New Actor</p>
            </a>
          </Link>
          <Link href="/addMovie">
            <a className={styles.card}>
              <h2>Add New Movie &rarr;</h2>
              <p>Add New Movie</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://dive.tech/" target="_blank" rel="noopener noreferrer">
          Test Fran Navarro Dive
        </a>
      </footer>
    </div>
  );
};

export default Home;
