import * as React from "react";
import { FC, useEffect } from "react";
//
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import EventSelectors from "redux/events/selectors";
import TextInput from "components/common/TextInput";
import FileInput from "components/common/FileInput";
import { formActions } from "redux/forms/slice";
import {
    EventEditFormFieldNames,
    EventEditFormFields,
    formPath,
    getEventEditFormFieldPath as getFieldPath
} from "components/events/EventEdit/form";
import SeparatedValueTextField from "components/common/SeparatedValueTextField";

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
        dispatch(formActions.addForm({ path: formPath, fields: EventEditFormFields }));

        return () => {
            dispatch(formActions.removeForm({ path: formPath }));
        };
    }, []);

    if (editedEventId === null) return null;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.generalInformationWrapper}>
                    <p className={classes.sectionTitle}>??ltal??nos inform??ci??k</p>
                    <form className={classes.form}>
                        <SeparatedValueTextField
                            path={getFieldPath(EventEditFormFieldNames.NAME)}
                            placeholder="N??v"
                            label="N??v"
                            className={classes.input}
                        />
                        <div className={classes.doubleInputWrapper}>
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.NAME)}
                                placeholder="N??v"
                                label="N??v"
                                className={classes.input}
                            />
                            <div />
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.CATEGORY)}
                                placeholder="Kateg??ria"
                                label="Kateg??ria"
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.doubleInputWrapper}>
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.LOCATION)}
                                placeholder="Helysz??n"
                                label="Helysz??n"
                                className={classes.input}
                            />
                            <div />
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.CONTACT)}
                                placeholder="El??rhet??s??g"
                                label="El??rhet??s??g"
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.doubleInputWrapper}>
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.DATE_START)}
                                placeholder="Id??pont (-t??l)"
                                label="Id??pont (-t??l)"
                                className={classes.input}
                            />
                            <div />
                            <TextInput
                                path={getFieldPath(EventEditFormFieldNames.DATE_END)}
                                placeholder="Id??pont (-ig)"
                                label="Id??pont (-ig)"
                                className={classes.input}
                            />
                        </div>
                    </form>
                </div>
                <div />
                <div className={classes.coverWrapper}>
                    <p className={classes.sectionTitle}>Bor??t??k??p</p>
                    <FileInput />
                </div>
            </div>
        </div>
    );
};

export default EventEdit;
