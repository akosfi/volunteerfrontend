import { get } from "lodash";
import { call, put, select } from "typed-redux-saga";
//
import { formPath, RegistrationFormFieldNames } from "components/pages/RegistrationPage/form";
import FormSelectors from "redux/forms/selectors";
import serverApi from "utils/api";
import { uiActions } from "redux/ui/slice";
import { UserRegistrationRequestPayload } from "types/api/user";
import { createFormFieldValueParser } from "redux/forms/utils";
import { userActions } from "../slice";
//

function* registerUserSaga() {
    try {
        const field = yield select(FormSelectors.getFormField, formPath);
        if (!field) {
            uiActions.pushSnackbarToQueue({
                snackbarText: "System error. Please refresh your page.",
                snackbarSeverity: "error"
            });
        }

        const getFieldValue = createFormFieldValueParser(field);

        const userRegistrationRequestPayload: UserRegistrationRequestPayload = {
            userName: getFieldValue(RegistrationFormFieldNames.USERNAME),
            password: getFieldValue(RegistrationFormFieldNames.PASSWORD),
            firstName: getFieldValue(RegistrationFormFieldNames.FIRST_NAME),
            lastName: getFieldValue(RegistrationFormFieldNames.LAST_NAME),
            phoneNumber: getFieldValue(RegistrationFormFieldNames.PHONE_NUMBER),
            email: getFieldValue(RegistrationFormFieldNames.EMAIL),
            dateOfBirth: getFieldValue(RegistrationFormFieldNames.DATE_OF_BIRTH),
            city: getFieldValue(RegistrationFormFieldNames.CITY)
        };

        yield call(serverApi.post, "/account/register", userRegistrationRequestPayload);
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to register!");
        yield put(userActions.registerUserError({ error: "Failed to register!" }));
        yield put(uiActions.pushSnackbarToQueue({ snackbarText: error, snackbarSeverity: "error" }));
    }
}
export default registerUserSaga;
