import { put } from "@redux-saga/core/effects";
//
import EventActions from "redux/events/actions";
//

function* initializeAppSaga() {
    yield put(EventActions.loadEventsAction());
}
export default initializeAppSaga;
