export enum EventEditFormFields {
    NAME = "EVENT_EDIT/NAME",
    CATEGORY = "EVENT_EDIT/CATEGORY",
    LOCATION = "EVENT_EDIT/LOCATION",
    CONTACT = "EVENT_EDIT/CONTACT",
    DATE_START = "EVENT_EDIT/DATE_START",
    DATE_END = "EVENT_EDIT/DATE_END",
    DETAILS = "EVENT_EDIT/DETAILS"
}

export type EventEditFormTypes = {
    [EventEditFormFields.NAME]: string | null;
    [EventEditFormFields.CATEGORY]: string | null;
    [EventEditFormFields.LOCATION]: string | null;
    [EventEditFormFields.CONTACT]: string | null;
    [EventEditFormFields.DATE_START]: string | null;
    [EventEditFormFields.DATE_END]: string | null;
    [EventEditFormFields.DETAILS]: string | null;
};
