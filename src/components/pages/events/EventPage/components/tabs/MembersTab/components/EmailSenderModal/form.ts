import { FormFieldList } from "redux/forms/types";

export const formPath = "EVENT_EMAIL_MODAL";

export enum EventEmailModalFormFieldNames {
    RECIPIENTS = "EVENT_EMAIL_MODAL/RECIPIENTS",
    SUBJECT = "EVENT_EMAIL_MODAL/SUBJECT",
    MESSAGE = "EVENT_EMAIL_MODAL/MESSAGE"
}

export const EventEmailModalFormFields: FormFieldList = {
    [EventEmailModalFormFieldNames.RECIPIENTS]: { value: "", defaultValue: "" },
    [EventEmailModalFormFieldNames.SUBJECT]: { value: "", defaultValue: "" },
    [EventEmailModalFormFieldNames.MESSAGE]: { value: "", defaultValue: "" }
};

export const getEventEmailModalFormFieldPath = (fieldName: EventEmailModalFormFieldNames) =>
    `${formPath}.children.${fieldName}`;
