import { User } from "./types";

export type UserState = {
    user: User | null;
    isLoggedIn: boolean;
    registration: {
        //TODO ERRORS?
        error: string;
        isLoading: boolean;
    };
    login: {
        error: string;
        isLoading: boolean;
    };
};

export const initialState: UserState = {
    user: null,
    isLoggedIn: false,
    registration: {
        error: "",
        isLoading: false
    },
    login: {
        error: "",
        isLoading: false
    }
};
