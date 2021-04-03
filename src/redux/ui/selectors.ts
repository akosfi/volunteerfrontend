import { head } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.ui;

export const getSnackBars = (state: StoreState) => getState(state).snackbarQueue;

export const getNextSnackbarInQueue = (state: StoreState) => head(getSnackBars(state));

export const getIsSidebarOpen = (state: StoreState) => getState(state).isSidebarOpen;

export const getIsMobileWindow = (state: StoreState): boolean => getState(state).isMobileWindow;

export const getSystemError = (state: StoreState) => getState(state).systemError;

const UiSelectors = {
    getSnackBars,
    getNextSnackbarInQueue,
    getIsSidebarOpen,
    getIsMobileWindow,
    getSystemError
};

export default UiSelectors;
