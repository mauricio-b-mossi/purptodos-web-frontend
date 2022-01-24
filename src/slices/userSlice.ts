import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  id: number;
  access_token?: string;
}

const initialState: User = {
  id: 0,
  username: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // setting the current state to the action payload
      state.id = action.payload.id;
      state.access_token = action.payload.access_token;
      state.username = action.payload.username;
    },
  },
});

//Exporting the action
export const { setUser } = userSlice.actions;

// exporting the selector
export const selectUsername = (state: { user: { username: string } }) =>
  state.user.username;
export const selectId = (state: { user: { id: number } }) =>
  state.user.id;
export const selectToken = (state: { user: { access_token: string } }) =>
  state.user.access_token;

// Exporting the reducer
export default userSlice.reducer;
