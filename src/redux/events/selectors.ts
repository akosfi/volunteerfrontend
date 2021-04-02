import { map, find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.event;

const getEvents = (state: StoreState) => getState(state).events;

const getEventIds = (state: StoreState) => map(getEvents(state), ({ id }) => id);

const getEventById = (state: StoreState, id: number) => find(getEvents(state), ({ id: _id }) => _id === id);

const getEditedEventId = (state: StoreState) => getState(state).eventEdit.editedEventId;

const getIsEventsLoading = (state: StoreState) => getState(state).isLoading;

const EventSelectors = {
    getEvents,
    getEventIds,
    getEventById,
    getIsEventsLoading,
    getEditedEventId
};

export default EventSelectors;
