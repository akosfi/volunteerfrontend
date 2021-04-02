//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.app;

const getIsAppInitialized = (state: StoreState) => getState(state).isAppInitialized;

const AppSelectors = {
    getIsAppInitialized
};

export default AppSelectors;
