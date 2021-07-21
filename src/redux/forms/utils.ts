import { get } from "lodash";
//
import { FormField } from "redux/forms/types";

export const sanitizeFormField = (field: FormField): FormField => ({
    value: field.value,
    defaultValue: field.defaultValue,
    isDirty: !!field.isDirty,
    error: field.error || "",
    children: !!field.children ? field.children : null
});

export const createFormFieldValueParser = (formField: FormField) => (fieldName: string) =>
    get(formField, `children.${fieldName}.value`);
