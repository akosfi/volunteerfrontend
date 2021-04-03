import { FormFieldList } from "redux/forms/types";

export const formPath = "loginPage";

export enum LoginFormFieldNames {
    EMAIL_OR_USERNAME = "LOGIN/EMAIL_OR_USERNAME",
    PASSWORD = "LOGIN/PASSWORD"
}

export const LoginFormFields: FormFieldList = {
    [LoginFormFieldNames.EMAIL_OR_USERNAME]: { value: "", defaultValue: "" },
    [LoginFormFieldNames.PASSWORD]: { value: "", defaultValue: "" }
};

export const getLoginFormFieldPath = (fieldName: LoginFormFieldNames) => `${formPath}.children.${fieldName}`;
