import * as React from "react";
import { FC, useEffect, useState } from "react";
import { get } from "lodash";
//
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import EventSelectors from "redux/events/selectors";
import { StoreState } from "../../../redux/state";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../../common/TextInput";
import { EventEditFormFields, EventEditFormTypes } from "../../../utils/forms/types/eventEdit";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%"
    },
    container: {
        width: "75%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "55% 1fr 33%",
        marginTop: "28px"
    },
    sectionTitle: {
        fontSize: "26px",
        fontWeight: "bold",
        paddingBottom: "24px"
    },
    generalInformationWrapper: {},
    coverWrapper: {},
    form: {},
    input: {}
}));

const EventEdit: FC = () => {
    const classes = useStyles();

    const editedEventId = useSelector(EventSelectors.getEditedEventId);
    const event = useSelector((state: StoreState) => EventSelectors.getEventById(state, editedEventId || -1));
    const dispatch = useDispatch();

    const initialFormData = {
        [EventEditFormFields.NAME]: get(event, "name", "")
    };

    const methods = useForm<EventEditFormTypes>({ defaultValues: initialFormData });

    //TODO DISPATCH
    const handleSubmit = (formData: EventEditFormTypes) => {};

    if (editedEventId === null) return null;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.generalInformationWrapper}>
                    <p className={classes.sectionTitle}>Általános információk</p>
                    <FormProvider {...methods}>
                        <form className={classes.form} onSubmit={methods.handleSubmit(handleSubmit)}>
                            <TextInput
                                name={EventEditFormFields.NAME}
                                placeholder="Név"
                                label="Név"
                                className={classes.input}
                            />
                        </form>
                    </FormProvider>
                </div>
                <div className={classes.coverWrapper}>
                    <p className={classes.sectionTitle}>Borítókép</p>
                </div>
            </div>
        </div>
    );
};

export default EventEdit;
