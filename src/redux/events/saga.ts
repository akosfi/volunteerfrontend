import { takeLeading } from "redux-saga/effects";
//
import { EventActionConstants } from "redux/events/actions";
import loadEventsSaga from "redux/events/sagas/loadEventsSaga";

function* eventSaga() {
    yield takeLeading(EventActionConstants.LOAD_EVENTS, loadEventsSaga);
}

export default eventSaga;
