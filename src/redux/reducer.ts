import { combineReducers } from "redux";
//
import { StoreState } from "~redux/state";
import eventReducer from "~redux/events/reducer";

const combinedReducers = combineReducers<StoreState>({
    event: eventReducer
});

export default combinedReducers;
