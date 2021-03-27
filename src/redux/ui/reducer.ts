import { Reducer } from "redux";
import { produce } from "immer";
//
import { SnackbarRedux } from "redux/ui/types";
import { UiActionConstants } from "redux/ui/actions";

export type UiState = {
    snackbarQueue: SnackbarRedux[];
};

export const initialState: UiState = {
    snackbarQueue: []
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
        default: {
            return state;
        }
    }
};
export default reducer;
