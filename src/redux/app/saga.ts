import { all, takeLeading } from "redux-saga/effects";
//
import { appActions } from "redux/app/slice";
import initializeAppSaga from "redux/app/sagas/initializeAppSaga";

function* appSaga() {
    yield all([takeLeading(appActions.setIsAppInitialized.type, initializeAppSaga)]);
}

export default appSaga;
