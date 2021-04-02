//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.user;

const getUser = (state: StoreState) => getState(state).user;

const getLoginError = (state: StoreState) => getState(state).login.error;

const getIsLoginLoading = (state: StoreState) => getState(state).login.isLoading;

const getRegistrationError = (state: StoreState) => getState(state).registration.error;

const getIsRegistrationLoading = (state: StoreState) => getState(state).registration.isLoading;

const UserSelectors = {
    getUser,
    getLoginError,
    getIsLoginLoading,
    getRegistrationError,
    getIsRegistrationLoading
};

export default UserSelectors;
