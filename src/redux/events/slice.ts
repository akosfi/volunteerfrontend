import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "redux/events/state";
import { Event, Member } from "redux/events/types";
import { RawDataToRowDataTransformer } from "components/pages/events/EventPage/components/tabs/MembersTab/config/list";

const eventSlice = createSlice({
    name: "EVENT",
    initialState,
    reducers: {
        loadEventsRequest: state => {
            state.events = [];
            state.isLoading = true;
        },
        loadEventsSuccess: (state, action: PayloadAction<{ events: Event[] }>) => {
            state.events = action.payload.events;
            state.isLoading = false;
        },
        loadEventsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.error = action.payload.error;
            state.isLoading = false;
        },
        joinEventRequest: (state, action: PayloadAction<{ eventId: number }>) => {
            state.join.eventId = action.payload.eventId;
            state.join.isJoining = true;
        },
        joinEventSuccess: state => {
            state.join.eventId = null;
            state.join.isJoining = false;
        },
        joinEventFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.join.eventId = null;
            state.join.isJoining = false;
            state.join.error = action.payload.error;
        },
        setEditedEventId: (state, action: PayloadAction<{ eventId: number | null }>) => {
            state.edit.editedEventId = action.payload.eventId;
        },
        loadEventMembersRequest: (state, action: PayloadAction<{ transformer: RawDataToRowDataTransformer }>) => {
            state.members.data.members = [];
            state.members.isLoading = true;
        },
        loadEventMembersSuccess: (state, action: PayloadAction<{ members: Member[] }>) => {
            state.members.data.members = action.payload.members;
            state.members.isLoading = false;
        },
        loadEventMembersFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.members.error = action.payload.error;
            state.members.isLoading = false;
        }
    }
});

export const { actions: eventActions, reducer: eventReducer } = eventSlice;
export type { EventState } from "redux/events/state";
export { initialState } from "redux/events/state";
