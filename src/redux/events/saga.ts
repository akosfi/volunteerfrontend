import { takeLeading } from "redux-saga/effects";
//
import { EventActionConstants } from "redux/events/actions";
import loadEventsSaga from "redux/events/sagas/loadEventsSaga";
import joinEventSaga from "redux/events/sagas/joinEventSaga";

function* eventSaga() {
    yield takeLeading(EventActionConstants.LOAD_EVENTS, loadEventsSaga);
    yield takeLeading(EventActionConstants.JOIN_EVENT, joinEventSaga);
}

export default eventSaga;
