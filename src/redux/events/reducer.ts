import { Reducer } from "redux";
import { produce } from "immer";
import { EventActionConstants } from "redux/events/actions";
import { Event } from "redux/events/types";

export type EventState = {
    events: Event[];
    isLoading: boolean;
    error: string;
    eventJoinedIds: number[];
    eventJoin: {
        eventId: number | null;
        isJoining: boolean;
        error: string;
    };
    eventEdit: {
        editedEventId: number | null;
    };
};

export const initialState: EventState = {
    events: [],
    isLoading: false,
    error: "",
    eventJoinedIds: [],
    eventJoin: {
        eventId: null,
        isJoining: false,
        error: ""
    },
    eventEdit: {
        editedEventId: null
    }
};

const reducer: Reducer<EventState> = (state = initialState, action): EventState => {
    switch (action.type) {
        case EventActionConstants.LOAD_EVENTS: {
            return produce(state, draft => {
                draft.events = [];
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
        //
        case EventActionConstants.JOIN_EVENT: {
            return produce(state, draft => {
                const { eventId } = action.payload;
                draft.eventJoin.eventId = eventId;
                draft.eventJoin.isJoining = true;
            });
        }
        case EventActionConstants.JOIN_EVENT_SUCCESS: {
            return produce(state, draft => {
                //TODO SET JOINED EVENT IDS
                draft.eventJoin.eventId = null;
                draft.eventJoin.isJoining = false;
            });
        }
        case EventActionConstants.JOIN_EVENT_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.eventJoin.eventId = null;
                draft.eventJoin.isJoining = false;
                draft.eventJoin.error = error;
            });
        }
        case EventActionConstants.SET_EDITED_EVENT_ID: {
            return produce(state, draft => {
                const { eventId } = action.payload;
                draft.eventEdit.editedEventId = eventId;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;
