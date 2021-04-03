import { Reducer } from "redux";
import { produce } from "immer";
import { get } from "lodash";
//
import { SnackbarRedux } from "redux/ui/types";
import { UiActionConstants } from "redux/ui/actions";

export type UiState = {
    snackbarQueue: SnackbarRedux[];
    isSidebarOpen: boolean;
    isMobileWindow: boolean;
    systemError: string;
};

export const initialState: UiState = {
    snackbarQueue: [],
    isSidebarOpen: false,
    isMobileWindow: get(window, "innerWidth", 0) <= 900,
    systemError: ""
};

//TODO do better solution, maybe redux
let snackbarId = 0;

const reducer: Reducer<UiState> = (state = initialState, action): UiState => {
    switch (action.type) {
        case UiActionConstants.POP_SNACKBAR_FROM_QUEUE: {
            return produce(state, draft => {
                draft.snackbarQueue.shift();
            });
        }
        case UiActionConstants.PUSH_SNACKBAR_TO_QUEUE: {
            return produce(state, draft => {
                const { snackbarText, snackbarSeverity } = action.payload;
                draft.snackbarQueue.push({ id: snackbarId, text: snackbarText, severity: snackbarSeverity });
                snackbarId++;
            });
        }
        case UiActionConstants.SET_IS_SIDEBAR_OPEN: {
            return produce(state, draft => {
                const { isOpen } = action.payload;
                draft.isSidebarOpen = isOpen;
            });
        }
        case UiActionConstants.SET_IS_MOBILE_WINDOW: {
            return produce(state, draft => {
                const { isMobileWindow } = action.payload;
                draft.isMobileWindow = isMobileWindow;
            });
        }
        case UiActionConstants.SET_SYSTEM_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.systemError = error;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;
