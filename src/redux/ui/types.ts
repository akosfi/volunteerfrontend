export type SnackbarRedux = {
    text: string;
    severity: "error" | "info" | "success" | "warning";
    id: number;
};
