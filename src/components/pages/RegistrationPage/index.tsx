import * as React from "react";
import { ChangeEvent, FC, useEffect } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import UserSelectors from "redux/user/selectors";
import {
    formPath,
    getRegistrationFormFieldPath as getFieldPath,
    RegistrationFormFieldNames,
    RegistrationFormFields
} from "components/pages/RegistrationPage/form";
import { formActions } from "redux/forms/slice";
import { userActions } from "redux/user/slice";
import CustomTextInput from "components/common/inputs/CustomTextInput";
import CustomDateInput from "components/common/inputs/CustomDateInput";
import CustomCheckboxInput from "../../common/inputs/CustomCheckboxInput";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        minHeight: "100vh",
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
        maxWidth: "614px",
        width: "100%",
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

    const handleLoginButtonClick = () => router.push("/login");

    const handleRegistrationButtonClick = (e: ChangeEvent) => {
        e.preventDefault();
        dispatch(userActions.registerUserRequest());
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <p className={classes.title}>SportLogisztik</p>

                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <form className={classes.form}>
                            <CustomTextInput
                                placeholder="Email c??m"
                                label="Email c??m"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.EMAIL)}
                            />
                            <CustomTextInput
                                placeholder="Felhaszn??l??n??v"
                                label="Felhaszn??l??n??v"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.USERNAME)}
                            />
                            <CustomTextInput
                                placeholder="Vezet??kn??v"
                                label="Vezet??kn??v"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.LAST_NAME)}
                            />
                            <CustomTextInput
                                placeholder="Keresztn??v"
                                label="Keresztn??v"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.FIRST_NAME)}
                            />
                            <CustomTextInput
                                placeholder="Telefonsz??m"
                                label="Telefonsz??m"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.PHONE_NUMBER)}
                            />
                            <CustomTextInput
                                placeholder="Jelsz??"
                                label="Jelsz??"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.PASSWORD)}
                                type={"password"}
                            />
                            <CustomDateInput
                                placeholder="Sz??let??si id??"
                                label="Sz??let??si id??"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.DATE_OF_BIRTH)}
                            />
                            <CustomTextInput
                                placeholder="V??ros"
                                label="V??ros"
                                className={classes.input}
                                path={getFieldPath(RegistrationFormFieldNames.CITY)}
                            />
                            <CustomCheckboxInput
                                path={getFieldPath(RegistrationFormFieldNames.TERMS_ACCEPTED)}
                                title={"Elfogadom a felhaszn??l??si felt??teleket ??s az adatkezel??si t??j??koztat??t."}
                            />

                            <div className={classes.buttonWrapper}>
                                <Button
                                    title={"Regiszt??ci??"}
                                    buttonType={ButtonType.POSITIVE_ACTION}
                                    className={classes.button}
                                    buttonSize={ButtonSize.BIG}
                                    type={"submit"}
                                    isLoading={isRegistrationLoading}
                                    onClick={handleRegistrationButtonClick}
                                />
                                <Button
                                    title={"Bejelentkez??s"}
                                    buttonType={ButtonType.BASIC}
                                    onClick={handleLoginButtonClick}
                                    buttonSize={ButtonSize.BIG}
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
