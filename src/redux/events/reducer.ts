import { Reducer } from "redux";
import { produce } from "immer";
import {EventActionConstants} from "~redux/events/actions";


export type EventState = {
    events: any[]; //TODO TYPE
    isLoading: boolean;
    error: string;
};

export const initialState: EventState = {
    events: [],
    isLoading: false,
    error: ""
};

const reducer: Reducer<EventState> = (state = initialState, action): EventState => {
    switch (action.type) {
        case EventActionConstants.LOAD_EVENTS: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case EventActionConstants.LOAD_EVENTS_SUCCESS: {
            return produce(state, draft => {
                const { events } = action.payload;
                draft.isLoading = false;
                draft.events = events;
            });
        }
        case EventActionConstants.LOAD_EVENTS_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.isLoading = false;
                draft.error = error;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;
