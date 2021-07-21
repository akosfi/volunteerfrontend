import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/user/slice";
import { User } from "./types";

const userSlice = createSlice({
    name: "USER",
    initialState,
    reducers: {
        loginUserRequest: state => {
            state.login.isLoading = true;
            state.login.error = "";
        },
        loginUserSuccess: (state, action: PayloadAction<{ user: User }>) => {
            state.user = action.payload.user;
            state.login.isLoading = false;
            state.login.error = "";
        },
        loginUserError: (state, action: PayloadAction<{ error: string }>) => {
            state.login.isLoading = false;
            state.login.error = action.payload.error;
        },
        registerUserRequest: state => {
            state.registration.isLoading = true;
            state.registration.error = "";
        },
        registerUserSuccess: (state, action: PayloadAction<{ user: User }>) => {
            state.user = action.payload.user;
            state.registration.isLoading = false;
            state.registration.error = "";
        },
        registerUserError: (state, action: PayloadAction<{ error: string }>) => {
            state.registration.isLoading = false;
            state.registration.error = action.payload.error;
        }
    }
});

export const { actions: userActions, reducer: userReducer } = userSlice;
export type { UserState } from "redux/user/state";
export { initialState } from "redux/user/state";
