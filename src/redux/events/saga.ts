import { takeLeading, takeLatest, all } from "redux-saga/effects";
//
import { eventActions } from "redux/events/slice";
import loadEventsRequestSaga from "redux/events/sagas/loadEventsRequestSaga";
import joinEventRequestSaga from "redux/events/sagas/joinEventRequestSaga";
import loadEventMembersRequestSaga from "redux/events/sagas/loadEventMembersRequestSaga";

function* eventSaga() {
    yield all([
        takeLatest(eventActions.loadEventsRequest.type, loadEventsRequestSaga),
        takeLatest(eventActions.loadEventMembersRequest.type, loadEventMembersRequestSaga),
        takeLeading(eventActions.joinEventRequest.type, joinEventRequestSaga)
    ]);
}

export default eventSaga;
