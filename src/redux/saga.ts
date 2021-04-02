import { all } from "redux-saga/effects";
//
import eventSaga from "redux/events/saga";
import uiSaga from "redux/ui/saga";
import appSaga from "redux/app/saga";

function* rootSaga() {
    yield all([eventSaga(), uiSaga(), appSaga()]);
}

export default rootSaga;
