import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get, set, forEach, unset, keys } from "lodash";
//
import { initialState } from "redux/forms/state";
import { FormField, FormFieldList } from "redux/forms/types";
import { sanitizeFormField } from "redux/forms/utils";

const formSlice = createSlice({
    name: "FORM",
    initialState,
    reducers: {
        setFieldValue: (state, action: PayloadAction<{ path: string; value: string }>) => {
            const { path, value } = action.payload;
            const isValidPath = !!get(state.formRoot, `children.${path}`, null);
            if (isValidPath) {
                set(state.formRoot, `children.${path}.value`, value);
                set(state.formRoot, `children.${path}.isDirty`, true);
            } else {
                console.error("TRIED TO SET INVALID FIELD VALUE.");
            }
        },
        setFieldError: (state, action: PayloadAction<{ path: string; error: string }>) => {
            const { path, error } = action.payload;
            const isValidPath = !!get(state.formRoot, path, null);
            if (isValidPath) {
                set(state.formRoot, `${path}.error`, error);
            } else {
                console.error("TRIED TO SET INVALID FIELD ERROR.");
            }
        },
        addForm: (state, action: PayloadAction<{ path: string; fields: FormFieldList }>) => {
            const { path, fields } = action.payload;

            const draftFields = { ...fields };
            forEach(keys(draftFields), fieldKey => (draftFields[fieldKey] = sanitizeFormField(draftFields[fieldKey])));
            const formField: FormField = sanitizeFormField({ value: "", defaultValue: "" });
            formField.children = draftFields;

            unset(state.formRoot, `children.${path}`);
            set(state.formRoot, `children.${path}`, formField);
        },
        removeForm: (state, action: PayloadAction<{ path: string }>) => {
            const { path } = action.payload;
            const isValidPath = !!get(state.formRoot, `children.${path}`, null);
            if (isValidPath) {
                unset(state.formRoot, `children.${path}`);
            } else {
                console.error("TRIED TO UNSET INVALID FORM FIELD.");
            }
        }
    }
});

export const { actions: formActions, reducer: formReducer } = formSlice;
export type { FormState } from "redux/forms/state";
export { initialState } from "redux/forms/state";
