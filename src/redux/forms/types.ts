export type FormFieldList = {
    [fieldName: string]: FormField;
};

export type FormField = {
    value: string;
    defaultValue: string;
    error?: string;
    isDirty?: boolean;
    children?: FormFieldList | null;
};
