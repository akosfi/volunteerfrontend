export enum LoginFormFields {
    EMAIL_OR_USERNAME = "LOGIN/EMAIL_OR_USERNAME",
    PASSWORD = "LOGIN/PASSWORD"
}

export type LoginFormTypes = {
    [LoginFormFields.EMAIL_OR_USERNAME]: string | null;
    [LoginFormFields.PASSWORD]: string | null;
};
