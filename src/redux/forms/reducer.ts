import { get, set, unset, keys, forEach } from "lodash";
import { produce } from "immer";
import { Reducer } from "redux";
//
import { FormField } from "redux/forms/types";
import { FormActionConstants } from "redux/forms/actions";
import { sanitizeFormField } from "redux/forms/utils";

export type FormState = {
    formRoot: FormField;
};

export const initialState: FormState = {
    formRoot: { value: "", defaultValue: "", children: {}, error: "", isDirty: false }
};

const reducer: Reducer<FormState> = (state = initialState, action): FormState => {
    switch (action.type) {
        case FormActionConstants.SET_FIELD_VALUE: {
            return produce(state, draft => {
                const { path, value } = action.payload;
                const isValidPath = !!get(draft.formRoot, `children.${path}`, null);
                if (isValidPath) {
                    set(draft.formRoot, `children.${path}.value`, value);
                    set(draft.formRoot, `children.${path}.isDirty`, true);
                } else {
                    console.error("TRIED TO SET INVALID FIELD VALUE.");
                }
            });
        }
        case FormActionConstants.SET_FIELD_ERROR: {
            return produce(state, draft => {
                const { path, error } = action.payload;
                const isValidPath = !!get(draft.formRoot, path, null);
                if (isValidPath) {
                    set(draft.formRoot, `${path}.error`, error);
                } else {
                    console.error("TRIED TO SET INVALID FIELD ERROR.");
                }
            });
        }
        case FormActionConstants.ADD_FORM: {
            return produce(state, draft => {
                const { path, fields } = action.payload;

                const draftFields = { ...fields };
                forEach(
                    keys(draftFields),
                    fieldKey => (draftFields[fieldKey] = sanitizeFormField(draftFields[fieldKey]))
                );
                const formField: FormField = sanitizeFormField({ value: "", defaultValue: "" });
                formField.children = draftFields;

                unset(draft.formRoot, `children.${path}`);
                set(draft.formRoot, `children.${path}`, formField);
            });
        }
        case FormActionConstants.REMOVE_FORM: {
            return produce(state, draft => {
                const { path } = action.payload;
                const isValidPath = !!get(draft.formRoot, `children.${path}`, null);
                if (isValidPath) {
                    unset(draft.formRoot, `children.${path}`);
                } else {
                    console.error("TRIED TO UNSET INVALID FORM FIELD.");
                }
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;
