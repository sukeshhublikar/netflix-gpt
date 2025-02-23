export const ErrorMessage = {
  INVALID_CREDENTIAL: "Invalid credential",
};

export const ErrorCode = {
  AUTH_INVALID: "auth/invalid-credential",
};
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

export const IMAGE_CDN = "https://media.themoviedb.org/t/p";

export const NETFLIX_BG_BANNER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg";

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;


export const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "jp", label: "Japanese" },
];
