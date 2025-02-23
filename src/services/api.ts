import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { API_OPTIONS, ErrorCode, ErrorMessage } from "./constant";
import openaiClient from "@/utils/openai";

export function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: "https://picsum.photos/id/8/5000/3333",
        })
          .then(() => {
            // Profile updated!
            // ...
            resolve({
              ...user,
              ...{
                displayName: name,
                photoURL: "https://picsum.photos/id/8/5000/3333",
              },
            });
          })
          .catch((error) => {
            // An error occurred
            // ...
            reject(error);
          });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        reject({ message: errorMessage });
      });
  });
}

export function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        // Signed in
        //  const user = userCredential.user;
        // ...
        resolve({});
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === ErrorCode.AUTH_INVALID) {
          reject({ message: ErrorMessage.INVALID_CREDENTIAL });
        }
      });
  });
}

export async function nowPlayingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data?.results;
  } catch (e) {
    console.log(e);
    throw Error("Error while fetching data");
  }
}

export async function getSuggestedMoviesDetail({ name }: { name: string }) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data?.results;
  } catch (e) {
    console.log(e);
    throw Error("Error while fetching data");
  }
}

function getGPTQuery(query: string) {
  return (
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    query +
    ". only give me names of 5 movies, comma separated like the example result given a head."
  );
}

export async function getGPTSuggestedMovies({ query }: { query: string }) {
  try {
    const response = await openaiClient.chat.completions.create({
      messages: [{ role: "user", content: getGPTQuery(query) }],
      model: "gpt-4o-mini",
    });

    const choice = response.choices[0];
    const allMovies: Promise<ReturnType<typeof getSuggestedMoviesDetail>>[] =
      [];
    choice.message.content?.split(",").map((name: string) => {
      allMovies.push(getSuggestedMoviesDetail({ name }));
    });
    let results = await Promise.allSettled(allMovies);
    results = results.map((result) => {
      if (result.status === "fulfilled") {
        return result.value;
      }
      return [];
    });
    return results;
  } catch (e) {
    console.log(e);
    throw Error("error_gpt_search");
  }
}
