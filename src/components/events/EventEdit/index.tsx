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
import FileInput from "../../common/FileInput";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    container: {
        width: "75%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "100%",
        marginTop: "28px",
        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "55% 1fr 33%"
        }
    },
    sectionTitle: {
        fontSize: "26px",
        fontWeight: "bold",
        paddingBottom: "24px"
    },
    generalInformationWrapper: {},
    coverWrapper: {},
    form: {},
    doubleInputWrapper: {
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "1fr 24px 1fr",
        marginBottom: "24px",
        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "1fr 64px 1fr",
            gridTemplateRows: "1fr"
        }
    },
    inputWrapper: {},
    input: {}
}));

const EventEdit: FC = () => {
    const classes = useStyles();

    const editedEventId = useSelector(EventSelectors.getEditedEventId);
    const event = useSelector((state: StoreState) => EventSelectors.getEventById(state, editedEventId || -1));
    const dispatch = useDispatch();

    const initialFormData = {
        [EventEditFormFields.NAME]: get(event, "name", ""),
        [EventEditFormFields.CATEGORY]: get(event, "category", ""),
        [EventEditFormFields.LOCATION]: get(event, "location", ""),
        [EventEditFormFields.CONTACT]: get(event, "contact", ""),
        [EventEditFormFields.DATE_START]: get(event, "startDate", ""),
        [EventEditFormFields.DATE_END]: get(event, "endDate", "")
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
                            <div className={classes.doubleInputWrapper}>
                                <TextInput
                                    name={EventEditFormFields.NAME}
                                    placeholder="Név"
                                    label="Név"
                                    className={classes.input}
                                />
                                <div />
                                <TextInput
                                    name={EventEditFormFields.CATEGORY}
                                    placeholder="Kategória"
                                    label="Kategória"
                                    className={classes.input}
                                />
                            </div>
                            <div className={classes.doubleInputWrapper}>
                                <TextInput
                                    name={EventEditFormFields.LOCATION}
                                    placeholder="Helyszín"
                                    label="Helyszín"
                                    className={classes.input}
                                />
                                <div />
                                <TextInput
                                    name={EventEditFormFields.CONTACT}
                                    placeholder="Elérhetőség"
                                    label="Elérhetőség"
                                    className={classes.input}
                                />
                            </div>
                            <div className={classes.doubleInputWrapper}>
                                <TextInput
                                    name={EventEditFormFields.DATE_START}
                                    placeholder="Időpont (-tól)"
                                    label="Időpont (-tól)"
                                    className={classes.input}
                                />
                                <div />
                                <TextInput
                                    name={EventEditFormFields.DATE_END}
                                    placeholder="Időpont (-ig)"
                                    label="Időpont (-ig)"
                                    className={classes.input}
                                />
                            </div>
                        </form>
                    </FormProvider>
                </div>
                <div />
                <div className={classes.coverWrapper}>
                    <p className={classes.sectionTitle}>Borítókép</p>
                    <FileInput />
                </div>
            </div>
        </div>
    );
};

export default EventEdit;
