import React, { FC } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import TextInput from "components/common/TextInput";
import Button, { ButtonType } from "components/common/Button";
import UserSelectors from "redux/user/selectors";
import UserActions from "redux/user/actions";
import { RegisterFormFields, RegisterFormTypes } from "utils/forms/types/register";

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

    const methods = useForm<RegisterFormTypes>();

    const router = useHistory();

    const handleRegistration = (formData: RegisterFormTypes) => dispatch(UserActions.registerUserAction(formData));

    const navigateToLogin = () => router.push("/login");

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p className={classes.title}>SportLogisztik</p>

                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <FormProvider {...methods}>
                            <form className={classes.form} onSubmit={methods.handleSubmit(handleRegistration)}>
                                <TextInput
                                    name={RegisterFormFields.EMAIL}
                                    placeholder="Email cím"
                                    label="Email cím"
                                    className={classes.input}
                                />
                                <TextInput
                                    name={RegisterFormFields.USERNAME}
                                    placeholder="Felhasználónév"
                                    label="Felhasználónév"
                                    className={classes.input}
                                />
                                <TextInput
                                    name={RegisterFormFields.FULL_NAME}
                                    placeholder="Teljes név"
                                    label="Teljes név"
                                    className={classes.input}
                                />
                                <TextInput
                                    name={RegisterFormFields.PHONE_NUMBER}
                                    placeholder="Telefonszám"
                                    label="Telefonszám"
                                    className={classes.input}
                                />
                                <TextInput
                                    name={RegisterFormFields.PASSWORD}
                                    placeholder="Jelszó"
                                    label="Jelszó"
                                    className={classes.input}
                                    type={"password"}
                                />
                                <TextInput
                                    name={RegisterFormFields.PASSWORD_AGAIN}
                                    placeholder="Jelszó mégegyszer"
                                    label="Jelszó mégegyszer"
                                    className={classes.input}
                                    type={"password"}
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
                        </FormProvider>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default RegistrationPage;
