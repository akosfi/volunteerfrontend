import * as React from "react";
import { FC, memo, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
//
import TextInput from "components/common/TextInput";
import {
    ProfileEditFormFieldNames,
    ProfileEditFormFields,
    formPath,
    getProfileEditFormFieldPath as getFieldPath
} from "components/pages/ProfilePage/components/tabs/EditTab/form";
import FileInput from "components/common/FileInput";
import { formActions } from "redux/forms/slice";

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
    inputWrapper: {},
    input: {
        marginBottom: "24px"
    }
}));

const EditTab: FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(formActions.addForm({ path: formPath, fields: ProfileEditFormFields }));

        return () => {
            dispatch(formActions.removeForm({ path: formPath }));
        };
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.generalInformationWrapper}>
                    <p className={classes.sectionTitle}>Általános információk</p>
                    <form className={classes.form}>
                        <TextInput
                            path={getFieldPath(ProfileEditFormFieldNames.EMAIL)}
                            placeholder="Email"
                            label="Email"
                            className={classes.input}
                        />
                        <TextInput
                            path={getFieldPath(ProfileEditFormFieldNames.USERNAME)}
                            placeholder="Felhasználónév"
                            label="Felhasználónév"
                            className={classes.input}
                        />
                        <TextInput
                            path={getFieldPath(ProfileEditFormFieldNames.FULL_NAME)}
                            placeholder="Teljes név"
                            label="Teljes név"
                            className={classes.input}
                        />
                        <TextInput
                            path={getFieldPath(ProfileEditFormFieldNames.PHONE_NUMBER)}
                            placeholder="Telefonszám"
                            label="Telefonszám"
                            className={classes.input}
                        />
                    </form>
                </div>
                <div />
                <div className={classes.coverWrapper}>
                    <p className={classes.sectionTitle}>Profilkép</p>
                    <FileInput />
                </div>
            </div>
        </div>
    );
};

export default memo(EditTab);
