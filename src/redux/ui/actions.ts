export enum UiActionConstants {
    POP_SNACKBAR_FROM_QUEUE = "UI/POP_SNACKBAR_FROM_QUEUE",
    PUSH_SNACKBAR_TO_QUEUE = "UI/PUSH_SNACKBAR_TO_QUEUE"
}

export const popSnackbarFromQueueAction = () => ({
    type: UiActionConstants.POP_SNACKBAR_FROM_QUEUE
});

export const pushSnackbarToQueueAction = (
    snackbarText: string,
    snackbarSeverity: "error" | "info" | "success" | "warning" = "success"
) => ({
    type: UiActionConstants.PUSH_SNACKBAR_TO_QUEUE,
    payload: { snackbarText, snackbarSeverity }
});
