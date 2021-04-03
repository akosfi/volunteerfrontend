import { FormFieldList } from "redux/forms/types";

export const formPath = "EVENT_EDITPage";

export enum EventEditFormFieldNames {
    NAME = "EVENT_EDIT/NAME",
    CATEGORY = "EVENT_EDIT/CATEGORY",
    LOCATION = "EVENT_EDIT/LOCATION",
    CONTACT = "EVENT_EDIT/CONTACT",
    DATE_START = "EVENT_EDIT/DATE_START",
    DATE_END = "EVENT_EDIT/DATE_END",
    DETAILS = "EVENT_EDIT/DETAILS"
}

export const EventEditFormFields: FormFieldList = {
    [EventEditFormFieldNames.NAME]: { value: "", defaultValue: "" },
    [EventEditFormFieldNames.CATEGORY]: { value: "", defaultValue: "" },
    [EventEditFormFieldNames.LOCATION]: { value: "", defaultValue: "" },
    [EventEditFormFieldNames.CONTACT]: { value: "", defaultValue: "" },
    [EventEditFormFieldNames.DATE_START]: { value: "", defaultValue: "" },
    [EventEditFormFieldNames.DATE_END]: { value: "", defaultValue: "" },
    [EventEditFormFieldNames.DETAILS]: { value: "", defaultValue: "" }
};

export const getEventEditFormFieldPath = (fieldName: EventEditFormFieldNames) => `${formPath}.children.${fieldName}`;
