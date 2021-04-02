import { Reducer } from "redux";
import { produce } from "immer";
//
import { User } from "redux/user/types";
import { UserActionConstants } from "./actions";
//
export type UserState = {
    user: User | null;
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
    registration: {
        error: "",
        isLoading: false
    },
    login: {
        error: "",
        isLoading: false
    }
};

const reducer: Reducer<UserState> = (state = initialState, action): UserState => {
    switch (action.type) {
        case UserActionConstants.LOGIN_USER: {
            return produce(state, draft => {
                draft.login.isLoading = true;
                draft.login.error = "";
            });
        }
        case UserActionConstants.LOGIN_USER_SUCCESS: {
            return produce(state, draft => {
                const { user } = action.payload;
                draft.user = user;
                draft.login.isLoading = false;
                draft.login.error = "";
            });
        }
        case UserActionConstants.LOGIN_USER_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.login.isLoading = false;
                draft.login.error = error;
            });
        }
        case UserActionConstants.REGISTER_USER: {
            return produce(state, draft => {
                draft.registration.isLoading = true;
                draft.registration.error = "";
            });
        }
        case UserActionConstants.REGISTER_USER_SUCCESS: {
            return produce(state, draft => {
                const { user } = action.payload;
                draft.user = user;
                draft.registration.isLoading = false;
                draft.registration.error = "";
            });
        }
        case UserActionConstants.REGISTER_USER_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.registration.isLoading = false;
                draft.registration.error = error;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;
