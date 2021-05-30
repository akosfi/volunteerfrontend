import { put } from "@redux-saga/core/effects";
//
import { eventActions } from "redux/events/slice";
//

function* initializeAppSaga() {
    yield put(eventActions.loadEventsRequest());
}
export default initializeAppSaga;
