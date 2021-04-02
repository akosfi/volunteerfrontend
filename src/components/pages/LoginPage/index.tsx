import React, { FC } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import TextInput from "../../common/TextInput";
import { FormProvider, useForm } from "react-hook-form";
import Button, { ButtonType } from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { LoginFormFields, LoginFormTypes } from "../../../utils/forms/types/login";
import UserSelectors from "../../../redux/user/selectors";
import UserActions from "../../../redux/user/actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "84px",
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

    const methods = useForm<LoginFormTypes>();

    const router = useHistory();

    const handleLogin = (formData: LoginFormTypes) => dispatch(UserActions.loginUserAction(formData));

    const navigateToRegistration = () => router.push("/register");

    return (
        <div className={classes.root}>
            <p className={classes.title}>SportLogisztik</p>

            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <FormProvider {...methods}>
                        <form className={classes.form} onSubmit={methods.handleSubmit(handleLogin)}>
                            <TextInput
                                name={LoginFormFields.EMAIL_OR_USERNAME}
                                placeholder="Email cím vagy felhasználónév"
                                label="Email cím vagy felhasználónév"
                                className={classes.input}
                            />
                            <TextInput
                                name={LoginFormFields.PASSWORD}
                                placeholder="Jelszó"
                                label="Jelszó"
                                className={classes.input}
                                type={"password"}
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
                    </FormProvider>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;
