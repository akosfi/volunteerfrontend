export enum UiActionConstants {
    POP_SNACKBAR_FROM_QUEUE = "UI/POP_SNACKBAR_FROM_QUEUE",
    PUSH_SNACKBAR_TO_QUEUE = "UI/PUSH_SNACKBAR_TO_QUEUE",

    SET_IS_SIDEBAR_OPEN = "UI/SET_IS_SIDEBAR_OPEN"
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

const UiActions = {
    popSnackbarFromQueueAction,
    pushSnackbarToQueueAction,
    setIsSidebarOpenAction
};

export default UiActions;
