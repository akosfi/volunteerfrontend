import { Event } from "redux/events/types";

export enum EventActionConstants {
    LOAD_EVENTS = "EVENTS/LOAD_EVENTS",
    LOAD_EVENTS_SUCCESS = "EVENTS/LOAD_EVENTS_SUCCESS",
    LOAD_EVENTS_ERROR = "EVENTS/LOAD_EVENTS_ERROR",

    JOIN_EVENT = "EVENTS/JOIN_EVENT",
    JOIN_EVENT_SUCCESS = "EVENTS/JOIN_EVENT_SUCCESS",
    JOIN_EVENT_ERROR = "EVENTS/JOIN_EVENT_ERROR"
}

const loadEventsAction = () => ({
    type: EventActionConstants.LOAD_EVENTS
});

const loadEventsSuccessAction = (events: Event[]) => ({
    type: EventActionConstants.LOAD_EVENTS_SUCCESS,
    payload: {
        events
    }
});

const loadEventsErrorAction = (error: string) => ({
    type: EventActionConstants.LOAD_EVENTS_ERROR,
    payload: {
        error
    }
});

const joinEventsAction = (eventId: number) => ({
    type: EventActionConstants.JOIN_EVENT,
    payload: {
        eventId
    }
});

const joinEventsSuccessAction = () => ({
    type: EventActionConstants.JOIN_EVENT_SUCCESS
});

const joinEventsErrorAction = (error: string) => ({
    type: EventActionConstants.JOIN_EVENT_ERROR,
    payload: { error }
});

const EventActions = {
    loadEventsAction,
    loadEventsSuccessAction,
    loadEventsErrorAction,
    joinEventsAction,
    joinEventsSuccessAction,
    joinEventsErrorAction
};

export default EventActions;
