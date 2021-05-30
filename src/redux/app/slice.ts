import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

import { initialState } from "redux/app/state";

const appSlice = createSlice({
    name: "APP",
    initialState,
    reducers: {
        setIsAppInitialized: (state, action: PayloadAction<{ isAppInitialized: boolean }>) => {
            state.isAppInitialized = action.payload.isAppInitialized;
        }
    }
});

export const { actions: appActions, reducer: appReducer } = appSlice;
export type { AppState } from "redux/app/state";
export { initialState } from "redux/app/state";
