import { FormField } from "redux/forms/types";

export const sanitizeFormField = (field: FormField): FormField => ({
    value: field.value,
    defaultValue: field.defaultValue,
    isDirty: !!field.isDirty,
    error: field.error || "",
    children: !!field.children ? field.children : null
});
