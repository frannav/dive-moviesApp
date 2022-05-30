import Movies from "../pages/movies/[id]";
import { Actor, Movie } from "../types";

const FETCH_URL: string = process.env.NEXT_PUBLIC_API_URL_BASE || "";

export const getAllMovies = async (): Promise<any> => {
  try {
    const response = await fetch(`${FETCH_URL}/movies`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    debugger;
    throw new Error("getAllMoviesError: ", error || "Unknown error");
  }
};

export const getAllActors = async (): Promise<any> => {
  try {
    const response = await fetch(`${FETCH_URL}/actors`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("getAllActorsError: ", error || "Unknown error");
  }
};

export const addActor = async (newActor: Actor): Promise<any> => {
  try {
    const response = await fetch(`${FETCH_URL}/actors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActor),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("addActor: ", error || "Unknown error");
  }
};

export const addMovie = async (newMovie: Movie): Promise<any> => {
  try {
    const response = await fetch(`${FETCH_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("addMovieError: ", error || "Unknown error");
  }
};

export const getPerformances = async (
  arrayActors: string[] | string
): Promise<any> => {
  try {
    const response = await fetch(
      `${FETCH_URL}/movies/performances/${arrayActors}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("getPerformancesError: ", error || "Unknown error");
  }
};
