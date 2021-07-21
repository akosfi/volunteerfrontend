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
import FormActions from "redux/forms/actions";
import { userActions } from "../../../redux/user/slice";

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
        //TODO CLEAR REGISTRATION STATE
        dispatch(FormActions.addFormAction(formPath, RegistrationFormFields));

        return () => {
            dispatch(FormActions.removeFormAction(formPath));
        };
    }, []);

    const router = useHistory();

    const handleLoginButtonClick = () => router.push("/login");

    const handleRegistrationButtonClick = () => dispatch(userActions.registerUserRequest());

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
                                placeholder="Vezetéknév"
                                label="Vezetéknév"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.LAST_NAME)}
                            />
                            <TextInput
                                placeholder="Keresztnév"
                                label="Keresztnév"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.FIRST_NAME)}
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
                                placeholder="Születési idő"
                                label="Születési idő"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.DATE_OF_BIRTH)}
                            />
                            <TextInput
                                placeholder="Város"
                                label="Város"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.CITY)}
                            />

                            <div className={classes.buttonWrapper}>
                                <Button
                                    title={"Regisztáció"}
                                    buttonType={ButtonType.POSITIVE_ACTION}
                                    className={classes.button}
                                    type={"submit"}
                                    isLoading={isRegistrationLoading}
                                    onClick={handleRegistrationButtonClick}
                                />
                                <Button
                                    title={"Bejelentkezés"}
                                    buttonType={ButtonType.BASIC}
                                    onClick={handleLoginButtonClick}
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
