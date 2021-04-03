export enum UiActionConstants {
    POP_SNACKBAR_FROM_QUEUE = "UI/POP_SNACKBAR_FROM_QUEUE",
    PUSH_SNACKBAR_TO_QUEUE = "UI/PUSH_SNACKBAR_TO_QUEUE",

    SET_IS_SIDEBAR_OPEN = "UI/SET_IS_SIDEBAR_OPEN",

    SET_IS_MOBILE_WINDOW = "UI/SET_IS_MOBILE_WINDOW",

    SET_SYSTEM_ERROR = "UI/SET_SYSTEM_ERROR"
}

const popSnackbarFromQueueAction = () => ({
    type: UiActionConstants.POP_SNACKBAR_FROM_QUEUE
});

const pushSnackbarToQueueAction = (
    snackbarText: string,
    snackbarSeverity: "error" | "info" | "success" | "warning" = "success"
) => ({
    type: UiActionConstants.PUSH_SNACKBAR_TO_QUEUE,
    payload: { snackbarText, snackbarSeverity }
});

const setIsSidebarOpenAction = (isOpen: boolean = true) => ({
    type: UiActionConstants.SET_IS_SIDEBAR_OPEN,
    payload: {
        isOpen
    }
});

const setIsMobileWindowAction = (isMobileWindow: boolean) => ({
    type: UiActionConstants.SET_IS_MOBILE_WINDOW,
    payload: {
        isMobileWindow
    }
});

const setSystemError = (error: string = "Unexpected error has occurred. Please refresh the page.") => ({
    type: UiActionConstants.SET_SYSTEM_ERROR,
    payload: {
        error
    }
});

const UiActions = {
    popSnackbarFromQueueAction,
    pushSnackbarToQueueAction,
    setIsSidebarOpenAction,
    setIsMobileWindowAction,
    setSystemError
};

export default UiActions;
