import * as React from "react";
import { FC, useEffect } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import Button, { ButtonType } from "components/common/Button";
import TextInput from "components/common/TextInput";
import UserSelectors from "redux/user/selectors";
import FormActions from "redux/forms/actions";
import {
    formPath,
    getLoginFormFieldPath as getFieldPath,
    LoginFormFieldNames,
    LoginFormFields
} from "components/pages/LoginPage/form";
import UserActions from "../../../redux/user/actions";
import UiActions from "../../../redux/ui/actions";

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

const LoginPage: FC = () => {
    const classes = useStyles();

    const isLoginLoading = useSelector(UserSelectors.getIsLoginLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FormActions.addFormAction(formPath, LoginFormFields));

        return () => {
            dispatch(FormActions.removeFormAction(formPath));
        };
    }, []);

    const router = useHistory();

    const navigateToRegistration = () => router.push("/register");

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p className={classes.title}>SportLogisztik</p>

                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <form className={classes.form}>
                            <TextInput
                                placeholder="Email cím vagy felhasználónév"
                                label="Email cím vagy felhasználónév"
                                className={classes.input}
                                path={getFieldPath(LoginFormFieldNames.EMAIL_OR_USERNAME)}
                            />
                            <TextInput
                                placeholder="Jelszó"
                                label="Jelszó"
                                className={classes.input}
                                type={"password"}
                                path={getFieldPath(LoginFormFieldNames.PASSWORD)}
                            />
                            <div className={classes.buttonWrapper}>
                                <Button
                                    title={"Bejelentkezés"}
                                    buttonType={ButtonType.POSITIVE_ACTION}
                                    className={classes.button}
                                    type={"submit"}
                                    isLoading={isLoginLoading}
                                />
                                <Button
                                    title={"Regisztáció"}
                                    buttonType={ButtonType.BASIC}
                                    onClick={navigateToRegistration}
                                />
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
