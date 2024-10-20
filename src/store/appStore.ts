import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
const store = configureStore({
  reducer: { user: useReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
