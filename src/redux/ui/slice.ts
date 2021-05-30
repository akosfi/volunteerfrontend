import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/ui/state";
import { SnackbarSeverity } from "./types";

const uiSlice = createSlice({
    name: "UI",
    initialState,
    reducers: {
        popSnackbarFromQueue: state => {
            state.snackbarQueue.shift();
        },
        pushSnackbarToQueue: (
            state,
            action: PayloadAction<{ snackbarText: string; snackbarSeverity: SnackbarSeverity }>
        ) => {
            state.snackbarQueue = [
                ...state.snackbarQueue,
                {
                    id: state.internalSnackbarIdCounter,
                    text: action.payload.snackbarText,
                    severity: action.payload.snackbarSeverity
                }
            ];
            state.internalSnackbarIdCounter = state.internalSnackbarIdCounter + 1;
        },
        setIsSidebarOpen: (state, action: PayloadAction<{ isSidebarOpen: boolean }>) => {
            state.isSidebarOpen = action.payload.isSidebarOpen;
        },
        setIsMobileWindow: (state, action: PayloadAction<{ isMobileWindow: boolean }>) => {
            state.isMobileWindow = action.payload.isMobileWindow;
        },
        setSystemError: (state, action: PayloadAction<{ systemError: string }>) => {
            state.systemError = action.payload.systemError;
        }
    }
});

export const { actions: uiActions, reducer: uiReducer } = uiSlice;
export type { UiState } from "redux/ui/state";
export { initialState } from "redux/ui/state";
