import { createSlice } from "@reduxjs/toolkit";

interface LoginState { 
    loggedIn: boolean;
}

const initialState : LoginState = {
    loggedIn: false,
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            // setting the current state to the action payload
            state.loggedIn = action.payload;
        }
    }
}
);

//Exporting the action
export const { setLoggedIn } = loginSlice.actions;

// exporting the selector
export const selectLoggedIn = (state: { login: { loggedIn: boolean; }; }) => state.login.loggedIn;

// Exporting the reducer
export default loginSlice.reducer;

