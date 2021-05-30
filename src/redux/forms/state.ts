import { FormField } from "./types";

export type FormState = {
    formRoot: FormField;
};

export const initialState: FormState = {
    formRoot: { value: "", defaultValue: "", children: {}, error: "", isDirty: false }
};
