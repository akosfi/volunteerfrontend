import { Reducer } from "redux";
import { produce } from "immer";
//
import { SnackbarRedux } from "redux/ui/types";
import { UiActionConstants } from "redux/ui/actions";

export type UiState = {
    snackbarQueue: SnackbarRedux[];
    isSidebarOpen: boolean;
};

export const initialState: UiState = {
    snackbarQueue: [],
    isSidebarOpen: true
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
        default: {
            return state;
        }
    }
};
export default reducer;
