import { takeLeading } from "redux-saga/effects";
//
import { AppActionConstants } from "redux/app/actions";
import initializeAppSaga from "redux/app/sagas/initializeAppSaga";

function* eventSaga() {
    yield takeLeading(AppActionConstants.INITIALIZE_APP, initializeAppSaga);
}

export default eventSaga;
