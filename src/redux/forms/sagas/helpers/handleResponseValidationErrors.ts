import { get, set, forEach } from "lodash";
import {
    getRegistrationFormFieldPath as getFieldPath,
    RegistrationFormFieldNames
} from "../../../../components/pages/RegistrationPage/form";
import { put } from "typed-redux-saga";
import { formActions } from "../../slice";

export type FormFieldResponseFieldPair = {
    formFieldName: string;
    responseFieldName: string;
};

export type FormFieldResponseFieldPairs = FormFieldResponseFieldPair[];

function* handleResponseValidationErrors(
    e: Error,
    formFieldResponseKeyPairs: FormFieldResponseFieldPairs,
    getFieldPath: (value: string) => string
) {
    const errors = get(e, "response.data.errors");

    if (!errors) return;

    let transformedErrors = {};
    forEach(formFieldResponseKeyPairs, ({ formFieldName, responseFieldName }) => {
        set(transformedErrors, `[${getFieldPath(formFieldName)}]`, get(errors, `${responseFieldName}[0]`, ""));
    });

    /*
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
    };*/

    yield put(formActions.setFieldErrorBulk(transformedErrors));
}

export default handleResponseValidationErrors;
