import { get } from "lodash";
import { put, select } from "typed-redux-saga";
//
import {
    formPath,
    RegistrationFormFieldNames,
    getRegistrationFormFieldPath as getFieldPath
} from "components/pages/RegistrationPage/form";
import FormSelectors from "redux/forms/selectors";
import serverApi from "utils/api";
import { uiActions } from "redux/ui/slice";
import { UserRegistrationRequestPayload } from "types/api/user";
import { createFormFieldValueParser } from "redux/forms/utils";
import { userActions } from "redux/user/slice";
import handleResponseValidationErrors, {
    FormFieldAPIFieldPairs
} from "redux/forms/sagas/helpers/handleResponseValidationErrors";
import { call } from "redux-saga/effects";
//

const formFieldAPIFieldPairs: FormFieldAPIFieldPairs = [
    { formFieldName: RegistrationFormFieldNames.USERNAME, responseFieldName: "userName" },
    { formFieldName: RegistrationFormFieldNames.PASSWORD, responseFieldName: "password" },
    { formFieldName: RegistrationFormFieldNames.FIRST_NAME, responseFieldName: "firstName" },
    { formFieldName: RegistrationFormFieldNames.LAST_NAME, responseFieldName: "lastName" },
    { formFieldName: RegistrationFormFieldNames.PHONE_NUMBER, responseFieldName: "phoneNumber" },
    { formFieldName: RegistrationFormFieldNames.EMAIL, responseFieldName: "email" },
    { formFieldName: RegistrationFormFieldNames.DATE_OF_BIRTH, responseFieldName: "dateOfBirth" },
    { formFieldName: RegistrationFormFieldNames.CITY, responseFieldName: "city" }
];

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
        yield call(handleResponseValidationErrors, e, formFieldAPIFieldPairs, getFieldPath);
        yield put(userActions.registerUserError({ error: "Failed to register!" }));
        yield put(uiActions.pushSnackbarToQueue({ snackbarText: error, snackbarSeverity: "error" }));
    }
}
export default registerUserSaga;
