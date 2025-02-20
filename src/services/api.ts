import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { API_OPTIONS, ErrorCode, ErrorMessage } from "./constant";

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
        const errorCode = error.code;
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
      .then(async (userCredential) => {
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
