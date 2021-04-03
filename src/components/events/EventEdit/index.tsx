import * as React from "react";
import { FC, useEffect } from "react";
//
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import EventSelectors from "redux/events/selectors";
import TextInput from "components/common/TextInput";
import FileInput from "components/common/FileInput";
import FormActions from "redux/forms/actions";
import {
    EventEditFormFieldNames,
    EventEditFormFields,
    formPath,
    getEventEditFormFieldPath as getFieldPath
} from "components/events/EventEdit/form";

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FormActions.addFormAction(formPath, EventEditFormFields));

        return () => {
            dispatch(FormActions.removeFormAction(formPath));
        };
    }, []);

    if (editedEventId === null) return null;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.generalInformationWrapper}>
                    <p className={classes.sectionTitle}>Általános információk</p>
                    <form className={classes.form}>
                        <div className={classes.doubleInputWrapper}>
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.NAME)}
                                placeholder="Név"
                                label="Név"
                                className={classes.input}
                            />
                            <div />
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.CATEGORY)}
                                placeholder="Kategória"
                                label="Kategória"
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.doubleInputWrapper}>
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.LOCATION)}
                                placeholder="Helyszín"
                                label="Helyszín"
                                className={classes.input}
                            />
                            <div />
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.CONTACT)}
                                placeholder="Elérhetőség"
                                label="Elérhetőség"
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.doubleInputWrapper}>
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.DATE_START)}
                                placeholder="Időpont (-tól)"
                                label="Időpont (-tól)"
                                className={classes.input}
                            />
                            <div />
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.DATE_END)}
                                placeholder="Időpont (-ig)"
                                label="Időpont (-ig)"
                                className={classes.input}
                            />
                        </div>
                    </form>
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
