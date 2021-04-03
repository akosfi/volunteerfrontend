import { FormFieldList } from "redux/forms/types";

export const formPath = "RegistrationPage";

export enum RegistrationFormFieldNames {
    EMAIL = "REGISTRATION/EMAIL",
    USERNAME = "REGISTRATION/USERNAME",
    FULL_NAME = "REGISTRATION/FULL_NAME",
    PHONE_NUMBER = "REGISTRATION/PHONE_NUMBER",
    PASSWORD = "REGISTRATION/PASSWORD",
    PASSWORD_AGAIN = "REGISTRATION/PASSWORD_AGAIN",
    TERMS_ACCEPTED = "REGISTRATION/TERMS_ACCEPTED"
}

export const RegistrationFormFields: FormFieldList = {
    [RegistrationFormFieldNames.EMAIL]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.USERNAME]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.FULL_NAME]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.PHONE_NUMBER]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.PASSWORD]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.PASSWORD_AGAIN]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.TERMS_ACCEPTED]: { value: "", defaultValue: "" }
};

export const getRegistrationFormFieldPath = (fieldName: RegistrationFormFieldNames) =>
    `${formPath}.children.${fieldName}`;
