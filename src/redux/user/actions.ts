import { LoginFormTypes } from "utils/forms/types/login";
import { RegisterFormTypes } from "utils/forms/types/register";
import { User } from "redux/user/types";

export enum UserActionConstants {
    LOGIN_USER = "USER/LOGIN_USER",
    LOGIN_USER_SUCCESS = "USER/LOGIN_USER_SUCCESS",
    LOGIN_USER_ERROR = "USER/LOGIN_USER_ERROR",

    REGISTER_USER = "USER/REGISTER_USER",
    REGISTER_USER_SUCCESS = "USER/REGISTER_USER_SUCCESS",
    REGISTER_USER_ERROR = "USER/REGISTER_USER_ERROR"
}

const loginUserAction = (formData: LoginFormTypes) => ({
    type: UserActionConstants.LOGIN_USER,
    payload: { formData }
});

const loginUserSuccessAction = (user: User) => ({
    type: UserActionConstants.LOGIN_USER_SUCCESS,
    payload: { user }
});

const loginUserErrorAction = (error: string) => ({
    type: UserActionConstants.LOGIN_USER_ERROR,
    payload: {
        error
    }
});

const registerUserAction = (formData: RegisterFormTypes) => ({
    type: UserActionConstants.REGISTER_USER,
    payload: { formData }
});

//TODO TYPE
const registerUserSuccessAction = (user: any) => ({
    type: UserActionConstants.REGISTER_USER_SUCCESS,
    payload: { user }
});

const registerUserErrorAction = (error: string) => ({
    type: UserActionConstants.REGISTER_USER_ERROR,
    payload: {
        error
    }
});

const UserActions = {
    loginUserAction,
    loginUserSuccessAction,
    loginUserErrorAction,
    registerUserAction,
    registerUserSuccessAction,
    registerUserErrorAction
};

export default UserActions;