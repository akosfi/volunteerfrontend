import { all } from "redux-saga/effects";
//
import eventSaga from "redux/events/saga";

function* rootSaga() {
    yield all([eventSaga()]);
}

export default rootSaga;
