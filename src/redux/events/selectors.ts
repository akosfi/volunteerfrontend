import { map, find } from "lodash";
//
import { StoreState } from "../state";

const getState = (state: StoreState) => state.event;

export const getEvents = (state: StoreState) => getState(state).events;

export const getEventIds = (state: StoreState) => map(getEvents(state), ({ id }) => id);

export const getEventById = (state: StoreState, id: number) => find(getEvents(state), ({ id: _id }) => _id === id);

export const getIsEventsLoading = (state: StoreState) => getState(state).isLoading;
