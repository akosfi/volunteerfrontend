import { get } from "lodash";
import { call, put, select } from "typed-redux-saga";
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
import { formActions } from "redux/forms/slice";
import handleResponseValidationErrors from "../../forms/sagas/helpers/handleResponseValidationErrors";
//

function* parseValidationErrors(e: any) {
    const errors = get(e, "response.data.errors");

    if (!errors) return;

    const transformedErrors = {
        [getFieldPath(RegistrationFormFieldNames.EMAIL)]: get(errors, "email[0]", ""),
        [getFieldPath(RegistrationFormFieldNames.FIRST_NAME)]: get(errors, "firstName[0]", ""),
        [RegistrationFormFieldNames.LAST_NAME]: get(errors, "lastName[0]", ""),
        [RegistrationFormFieldNames.CITY]: get(errors, "city[0]", ""),
        [RegistrationFormFieldNames.PHONE_NUMBER]: get(errors, "phoneNumber[0]", ""),
        [RegistrationFormFieldNames.TERMS_ACCEPTED]: get(errors, "termsAccepted[0]", ""),
        [RegistrationFormFieldNames.USERNAME]: get(errors, "userName[0]", ""),
        [getFieldPath(RegistrationFormFieldNames.DATE_OF_BIRTH)]: get(errors, "dateOfBirth[0]", ""),
        [RegistrationFormFieldNames.PASSWORD]: get(errors, "password[0]", "")
    };

    yield put(formActions.setFieldErrorBulk(transformedErrors));
}

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
        yield call(handleResponseValidationErrors, e, [], getFieldPath);
        yield put(userActions.registerUserError({ error: "Failed to register!" }));
        yield put(uiActions.pushSnackbarToQueue({ snackbarText: error, snackbarSeverity: "error" }));
    }
}
export default registerUserSaga;
