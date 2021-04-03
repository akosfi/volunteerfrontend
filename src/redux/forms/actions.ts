import { FormFieldList } from "./types";

export enum FormActionConstants {
    SET_FIELD_VALUE = "FORMS/SET_FIELD_VALUE",
    SET_FIELD_ERROR = "FORMS/SET_FIELD_ERROR",
    ADD_FORM = "FORMS/ADD_FORM",
    REMOVE_FORM = "FORMS/REMOVE_FORM",
    CLEAR_FORM = "FORMS/CLEAR_FORM"
}

const setFieldValueAction = (path: string, value: string) => ({
    type: FormActionConstants.SET_FIELD_VALUE,
    payload: {
        path,
        value
    }
});

const addFormAction = (path: string, fields: FormFieldList) => ({
    type: FormActionConstants.ADD_FORM,
    payload: {
        path,
        fields
    }
});

const removeFormAction = (path: string) => ({
    type: FormActionConstants.REMOVE_FORM,
    payload: {
        path
    }
});

const clearFormAction = (path: string, isRecursive = false) => ({
    type: FormActionConstants.CLEAR_FORM,
    payload: {
        path,
        isRecursive
    }
});

const setFieldErrorAction = (path: string, error: string) => ({
    type: FormActionConstants.SET_FIELD_ERROR,
    payload: {
        path,
        error
    }
});

const FormActions = { setFieldValueAction, addFormAction, removeFormAction, clearFormAction, setFieldErrorAction };

export default FormActions;
