import { FormFieldList } from "redux/forms/types";

export const formPath = "PROFILE_PAGE";

export enum ProfileEditFormFieldNames {
    EMAIL = "PROFILE_PAGE/NAME",
    USERNAME = "PROFILE_PAGE/CATEGORY",
    FULL_NAME = "PROFILE_PAGE/LOCATION",
    PHONE_NUMBER = "PROFILE_PAGE/CONTACT"
}

export const ProfileEditFormFields: FormFieldList = {
    [ProfileEditFormFieldNames.EMAIL]: { value: "", defaultValue: "" },
    [ProfileEditFormFieldNames.USERNAME]: { value: "", defaultValue: "" },
    [ProfileEditFormFieldNames.FULL_NAME]: { value: "", defaultValue: "" },
    [ProfileEditFormFieldNames.PHONE_NUMBER]: { value: "", defaultValue: "" }
};

export const getProfileEditFormFieldPath = (fieldName: ProfileEditFormFieldNames) =>
    `${formPath}.children.${fieldName}`;
