import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { eventReducer } from "redux/events/slice";
import { uiReducer } from "redux/ui/slice";
import { userReducer } from "redux/user/slice";
import { appReducer } from "redux/app/slice";
import { formReducer } from "redux/forms/slice";
import { listReducer } from "redux/list/slice";

const combinedReducers = combineReducers<StoreState>({
    event: eventReducer,
    ui: uiReducer,
    user: userReducer,
    app: appReducer,
    form: formReducer,
    list: listReducer
});

export default combinedReducers;
