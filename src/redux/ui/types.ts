export type SnackbarSeverity = "error" | "info" | "success" | "warning";

export type SnackbarRedux = {
    text: string;
    severity: SnackbarSeverity;
    id: number;
};
