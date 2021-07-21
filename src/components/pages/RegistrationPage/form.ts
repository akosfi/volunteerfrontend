import { FormFieldList } from "redux/forms/types";

export const formPath = "RegistrationPage";

export enum RegistrationFormFieldNames {
    EMAIL = "REGISTRATION/EMAIL",
    USERNAME = "REGISTRATION/USERNAME",
    FIRST_NAME = "REGISTRATION/FIRST_NAME",
    LAST_NAME = "REGISTRATION/LAST_NAME",
    PASSWORD = "REGISTRATION/PASSWORD",
    PHONE_NUMBER = "REGISTRATION/PHONE_NUMBER",
    DATE_OF_BIRTH = "REGISTRATION/DATE_OF_BIRTH",
    CITY = "REGISTRATION/CITY",
    TERMS_ACCEPTED = "REGISTRATION/TERMS_ACCEPTED"
}

export const RegistrationFormFields: FormFieldList = {
    [RegistrationFormFieldNames.EMAIL]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.USERNAME]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.FIRST_NAME]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.LAST_NAME]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.PASSWORD]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.PHONE_NUMBER]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.DATE_OF_BIRTH]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.CITY]: { value: "", defaultValue: "" },
    [RegistrationFormFieldNames.TERMS_ACCEPTED]: { value: "false", defaultValue: "false" }
};

export const getRegistrationFormFieldPath = (fieldName: RegistrationFormFieldNames) =>
    `${formPath}.children.${fieldName}`;
