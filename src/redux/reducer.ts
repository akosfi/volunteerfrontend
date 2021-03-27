import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import eventReducer from "redux/events/reducer";
import uiReducer from "redux/ui/reducer";

const combinedReducers = combineReducers<StoreState>({
    event: eventReducer,
    ui: uiReducer
});

export default combinedReducers;
