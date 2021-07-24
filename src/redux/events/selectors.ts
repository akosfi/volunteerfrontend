import { map, find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.event;

const getEvents = (state: StoreState) => getState(state).events;

const getEventIds = (state: StoreState) => map(getEvents(state), ({ id }) => id);

const getEventById = (state: StoreState, id: number) => find(getEvents(state), ({ id: _id }) => _id === id);

const getEditedEventId = (state: StoreState) => getState(state).edit.editedEventId;

const getIsEventsLoading = (state: StoreState) => getState(state).isLoading;

const getMembers = (state: StoreState) => getState(state).members.data.members;

const getIsMembersLoading = (state: StoreState) => getState(state).members.isLoading;

const getMembersError = (state: StoreState) => getState(state).members.error;

const getEmailSendingModalIsOpen = (state: StoreState) => getState(state).emailSending.isModalOpen;

const EventSelectors = {
    getEvents,
    getEventIds,
    getEventById,
    getIsEventsLoading,
    getEditedEventId,
    getMembers,
    getIsMembersLoading,
    getMembersError,
    getIsEmailSendingModalOpen: getEmailSendingModalIsOpen
};

export default EventSelectors;
