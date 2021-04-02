export enum RegisterFormFields {
    EMAIL = "REGISTER/EMAIL",
    USERNAME = "REGISTER/USERNAME",
    FULL_NAME = "REGISTER/FULL_NAME",
    PHONE_NUMBER = "REGISTER/PHONE_NUMBER",
    PASSWORD = "REGISTER/PASSWORD",
    PASSWORD_AGAIN = "REGISTER/PASSWORD_AGAIN",
    TERMS_ACCEPTED = "REGISTER/TERMS_ACCEPTED"
}

export type RegisterFormTypes = {
    [RegisterFormFields.EMAIL]: string | null;
    [RegisterFormFields.USERNAME]: string | null;
    [RegisterFormFields.FULL_NAME]: string | null;
    [RegisterFormFields.PHONE_NUMBER]: string | null;
    [RegisterFormFields.PASSWORD]: string | null;
    [RegisterFormFields.PASSWORD_AGAIN]: string | null;
    [RegisterFormFields.TERMS_ACCEPTED]: boolean;
};
