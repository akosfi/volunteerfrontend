import { takeLeading, takeLatest } from "redux-saga/effects";
//
import { EventActionConstants } from "redux/events/actions";
import loadEventsSaga from "redux/events/sagas/loadEventsSaga";
import joinEventSaga from "redux/events/sagas/joinEventSaga";
import loadEventMembersSaga from "redux/events/sagas/loadEventMembersSaga";

function* eventSaga() {
    yield takeLatest(EventActionConstants.LOAD_EVENTS, loadEventsSaga);
    yield takeLatest(EventActionConstants.LOAD_EVENT_MEMBERS, loadEventMembersSaga);
    yield takeLeading(EventActionConstants.JOIN_EVENT, joinEventSaga);
}

export default eventSaga;
