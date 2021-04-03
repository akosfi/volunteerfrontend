import { all } from "redux-saga/effects";
//
import eventSaga from "redux/events/saga";
import uiSaga from "redux/ui/saga";
import appSaga from "redux/app/saga";
import userSaga from "redux/user/saga";

function* rootSaga() {
    yield all([eventSaga(), uiSaga(), appSaga(), userSaga()]);
}

export default rootSaga;
