
export enum EventActionConstants {
    LOAD_EVENTS = "EVENTS/LOAD_EVENTS",
    LOAD_EVENTS_SUCCESS = "EVENTS/LOAD_EVENTS_SUCCESS",
    LOAD_EVENTS_ERROR = "EVENTS/LOAD_EVENTS_ERROR",
}

export const loadEventsAction = () => ({
    type: EventActionConstants.LOAD_EVENTS
});

//TODO TYPE
export const loadEventsSuccessAction = (events: any[]) => ({
    type: EventActionConstants.LOAD_EVENTS_SUCCESS,
    payload: {
        events
    }
});

export const loadEventsErrorAction = (error: string) => ({
    type: EventActionConstants.LOAD_EVENTS_SUCCESS,
    payload: {
        error
    }
});