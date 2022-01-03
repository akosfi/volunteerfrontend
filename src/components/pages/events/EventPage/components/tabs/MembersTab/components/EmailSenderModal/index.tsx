import * as React from "react";
import { FC, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Modal from "../../../../../../../../common/Modal";
import { useDispatch, useSelector } from "react-redux";
import EventSelectors from "../../../../../../../../../redux/events/selectors";
import { eventActions } from "../../../../../../../../../redux/events/slice";
import { formActions } from "../../../../../../../../../redux/forms/slice";
import {
    EventEmailModalFormFields,
    formPath,
    EventEmailModalFormFieldNames,
    getEventEmailModalFormFieldPath as getFieldPath
} from "components/pages/events/EventPage/components/tabs/MembersTab/components/EmailSenderModal/form";
import TextInput from "../../../../../../../../common/TextInput";
import CustomTextInput from "../../../../../../../../common/inputs/CustomTextInput";
import SeparatedValueTextField from "../../../../../../../../common/SeparatedValueTextField";

const useStyles = makeStyles(() => ({
    root: {
        borderRadius: "5px",
        border: "2px solid #FF8743",
        color: "#FF8743",
        fontSize: "12px",
        padding: "1px 4px",
        display: "inline-block"
    }
}));

const EmailSenderModal: FC = () => {
    const isOpen = useSelector(EventSelectors.getIsEmailSendingModalOpen);

    const dispatch = useDispatch();
    const onClose = () => dispatch(eventActions.setIsEmailSendingModalOpen({ isOpen: !isOpen }));

    useEffect(() => {
        dispatch(formActions.addForm({ path: formPath, fields: EventEmailModalFormFields }));

        return () => {
            dispatch(formActions.removeForm({ path: formPath }));
        };
    }, []);

    const classes = useStyles();

    if (!isOpen) return null;

    return (
        <Modal title={"Email küldés"} onClose={onClose}>
            <CustomTextInput
                path={getFieldPath(EventEmailModalFormFieldNames.RECIPIENTS)}
                placeholder="Címzettek"
                label="Címzettek"
            />
            <CustomTextInput
                path={getFieldPath(EventEmailModalFormFieldNames.SUBJECT)}
                placeholder="Tárgy"
                label="Tárgy"
            />
            <CustomTextInput
                path={getFieldPath(EventEmailModalFormFieldNames.MESSAGE)}
                placeholder="Üzenet"
                label="Üzenet"
            />
            <div />
        </Modal>
    );
};

export default EmailSenderModal;
