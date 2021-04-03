import { takeLeading } from "redux-saga/effects";
//
import loginUserSaga from "redux/user/sagas/loginUserSaga";
import { UserActionConstants } from "redux/user/actions";

function* userSaga() {
    yield takeLeading(UserActionConstants.LOGIN_USER, loginUserSaga);
}

export default userSaga;
