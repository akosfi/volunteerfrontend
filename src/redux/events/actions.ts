import { Event } from "redux/events/types";

export enum EventActionConstants {
    LOAD_EVENTS = "EVENTS/LOAD_EVENTS",
    LOAD_EVENTS_SUCCESS = "EVENTS/LOAD_EVENTS_SUCCESS",
    LOAD_EVENTS_ERROR = "EVENTS/LOAD_EVENTS_ERROR",

    JOIN_EVENT = "EVENTS/JOIN_EVENT",
    JOIN_EVENT_SUCCESS = "EVENTS/JOIN_EVENT_SUCCESS",
    JOIN_EVENT_ERROR = "EVENTS/JOIN_EVENT_ERROR"
}

export const loadEventsAction = () => ({
    type: EventActionConstants.LOAD_EVENTS
});

export const loadEventsSuccessAction = (events: Event[]) => ({
    type: EventActionConstants.LOAD_EVENTS_SUCCESS,
    payload: {
        events
    }
});

export const loadEventsErrorAction = (error: string) => ({
    type: EventActionConstants.LOAD_EVENTS_ERROR,
    payload: {
        error
    }
});

export const joinEventsAction = (eventId: number) => ({
    type: EventActionConstants.JOIN_EVENT,
    payload: {
        eventId
    }
});

export const joinEventsSuccessAction = () => ({
    type: EventActionConstants.JOIN_EVENT_SUCCESS
});

export const joinEventsErrorAction = (error: string) => ({
    type: EventActionConstants.JOIN_EVENT_ERROR,
    payload: { error }
});
