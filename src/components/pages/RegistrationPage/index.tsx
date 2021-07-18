import * as React from "react";
import { FC, useEffect } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import TextInput from "components/common/TextInput";
import Button, { ButtonType } from "components/common/Button";
import UserSelectors from "redux/user/selectors";
import {
    formPath,
    getRegistrationFormFieldPath as getFieldPath,
    RegistrationFormFieldNames,
    RegistrationFormFields
} from "components/pages/RegistrationPage/form";
import { formActions } from "redux/forms/slice";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "100vh",
        background: "#F6F6F6"
    },
    container: {
        paddingTop: "84px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center"
    },
    card: {
        marginTop: "40px",
        width: "414px",
        paddingTop: "64px"
    },
    form: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
    },
    input: {
        marginBottom: "22px"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 64px"
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "column",
        width: "100%"
    },
    button: {
        marginBottom: "10px"
    }
}));

const RegistrationPage: FC = () => {
    const classes = useStyles();

    const isRegistrationLoading = useSelector(UserSelectors.getIsRegistrationLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(formActions.addForm({ path: formPath, fields: RegistrationFormFields }));

        return () => {
            dispatch(formActions.removeForm({ path: formPath }));
        };
    }, []);

    const router = useHistory();

    const navigateToLogin = () => router.push("/login");

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p className={classes.title}>SportLogisztik</p>

                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <form className={classes.form}>
                            <TextInput
                                placeholder="Email cím"
                                label="Email cím"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.EMAIL)}
                            />
                            <TextInput
                                placeholder="Felhasználónév"
                                label="Felhasználónév"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.USERNAME)}
                            />
                            <TextInput
                                placeholder="Teljes név"
                                label="Teljes név"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.FULL_NAME)}
                            />
                            <TextInput
                                placeholder="Telefonszám"
                                label="Telefonszám"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.PHONE_NUMBER)}
                            />
                            <TextInput
                                placeholder="Jelszó"
                                label="Jelszó"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.PASSWORD)}
                                type={"password"}
                            />
                            <TextInput
                                placeholder="Jelszó mégegyszer"
                                label="Jelszó mégegyszer"
                                className={classes.input}
                                type={"password"}
                                path={getFieldPath(RegistrationFormFieldNames.PASSWORD_AGAIN)}
                            />

                            <div className={classes.buttonWrapper}>
                                <Button
                                    title={"Regisztáció"}
                                    buttonType={ButtonType.POSITIVE_ACTION}
                                    className={classes.button}
                                    type={"submit"}
                                    isLoading={isRegistrationLoading}
                                />
                                <Button
                                    title={"Bejelentkezés"}
                                    buttonType={ButtonType.BASIC}
                                    onClick={navigateToLogin}
                                />
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default RegistrationPage;
