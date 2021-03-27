import { head } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.ui;

export const getSnackBars = (state: StoreState) => getState(state).snackbarQueue;

export const getNextSnackbarInQueue = (state: StoreState) => head(getSnackBars(state));

export const getIsSidebarOpen = (state: StoreState) => getState(state).isSidebarOpen;
