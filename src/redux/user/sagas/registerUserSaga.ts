import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { formPath, RegistrationFormFieldNames } from "components/pages/RegistrationPage/form";
import FormSelectors from "redux/forms/selectors";
import serverApi from "utils/serverApi";
import { uiActions } from "redux/ui/slice";
import { UserRegistrationRequestPayload } from "types/api/user";
//

function* registerUserSaga() {
    try {
        const field = yield select(FormSelectors.getFormField, formPath);
        if (!field) {
            console.log("FIELD NOT FOUND");
            //DO more appropritae error handling
        }

        const {
            children: {
                [RegistrationFormFieldNames.USERNAME]: userName,
                [RegistrationFormFieldNames.PASSWORD]: password,
                [RegistrationFormFieldNames.FIRST_NAME]: firstName,
                [RegistrationFormFieldNames.LAST_NAME]: lastName,
                [RegistrationFormFieldNames.PHONE_NUMBER]: phoneNumber,
                [RegistrationFormFieldNames.EMAIL]: email,
                [RegistrationFormFieldNames.DATE_OF_BIRTH]: dateOfBirth,
                [RegistrationFormFieldNames.CITY]: city
            }
        } = field;

        const userRegistrationRequestPayload: UserRegistrationRequestPayload = {
            userName,
            password,
            firstName,
            lastName,
            phoneNumber,
            email,
            dateOfBirth,
            city
        };

        yield retry(2, 1500, serverApi.post, "/account/register", userRegistrationRequestPayload);
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load events!");
        yield put(uiActions.pushSnackbarToQueue({ snackbarText: error, snackbarSeverity: "error" }));
    }
}
export default registerUserSaga;
