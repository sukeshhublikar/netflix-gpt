import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export interface userState {
  user: { displayName: string; email: string } | null;
}

const initialState: userState = {
  user: null,
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
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
