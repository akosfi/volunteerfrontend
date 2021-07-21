import { takeLeading } from "redux-saga/effects";
//
import loginUserSaga from "redux/user/sagas/loginUserSaga";
import { userActions } from "redux/user/slice";
import registerUserSaga from "redux/user/sagas/registerUserSaga";

function* userSaga() {
    yield takeLeading(userActions.loginUserRequest.type, loginUserSaga);
    yield takeLeading(userActions.registerUserRequest.type, registerUserSaga);
}

export default userSaga;
