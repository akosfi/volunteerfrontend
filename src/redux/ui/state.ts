import { get } from "lodash";
//
import { SnackbarRedux } from "redux/ui/types";

export type UiState = {
    snackbarQueue: SnackbarRedux[];
    isSidebarOpen: boolean;
    isMobileWindow: boolean;
    systemError: string;
    internalSnackbarIdCounter: number;
};

export const initialState: UiState = {
    snackbarQueue: [],
    isSidebarOpen: false,
    isMobileWindow: get(window, "innerWidth", 0) <= 900,
    systemError: "",
    internalSnackbarIdCounter: 0
};
