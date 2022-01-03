import { Event, Member } from "./types";

export type EventState = {
    events: Event[];
    isLoading: boolean;
    error: string;
    eventJoinedIds: number[];
    join: {
        eventId: number | null;
        isJoining: boolean;
        error: string;
    };
    edit: {
        editedEventId: number | null;
    };
    members: {
        isLoading: boolean;
        error: string;
        data: {
            members: Member[];
        };
    };
    emailSending: {
        isLoading: boolean;
        error: string;
        isModalOpen: boolean;
    };
};

export const initialState: EventState = {
    events: [],
    isLoading: false,
    error: "",
    eventJoinedIds: [],
    join: {
        eventId: null,
        isJoining: false,
        error: ""
    },
    edit: {
        editedEventId: null
    },
    members: {
        isLoading: false,
        error: "",
        data: {
            members: []
        }
    },
    emailSending: {
        isLoading: false,
        error: "",
        isModalOpen: false
    }
};
