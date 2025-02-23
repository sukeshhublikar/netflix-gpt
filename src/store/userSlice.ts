import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export interface userState {
  user: { displayName: string; email: string } | null;
  language: string;
}

const initialState: userState = {
  user: null,
  language: "en",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      if (!_.isEmpty(action.payload)) {
        state.user = action.payload;
      }
    },
    removeUser: (state) => {
      state.user = null;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { addUser, removeUser, setLanguage } = userSlice.actions;

export default userSlice.reducer;
