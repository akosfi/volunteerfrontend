import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import eventReducer from "redux/events/reducer";
import uiReducer from "redux/ui/reducer";
import userReducer from "redux/user/reducer";
import appReducer from "redux/app/reducer";
import formReducer from "redux/forms/reducer";

const combinedReducers = combineReducers<StoreState>({
    event: eventReducer,
    ui: uiReducer,
    user: userReducer,
    app: appReducer,
    form: formReducer
});

export default combinedReducers;
