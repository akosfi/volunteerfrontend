import * as React from "react";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
//
import UiSelectors from "redux/ui/selectors";
import { uiActions } from "redux/ui/slice";
import { SnackbarRedux } from "redux/ui/types";

const SnackbarQueueHandler: FC = () => {
    const [currentSnackbar, setCurrentSnackbar] = useState<SnackbarRedux>();
    const dispatch = useDispatch();

    const nextSnackbarInQueue = useSelector(UiSelectors.getNextSnackbarInQueue);

    useEffect(() => {
        if (nextSnackbarInQueue?.id !== currentSnackbar?.id) {
            setCurrentSnackbar(nextSnackbarInQueue);
            setTimeout(() => dispatch(uiActions.popSnackbarFromQueue()), 5000);
        }
    }, [nextSnackbarInQueue]);

    if (!currentSnackbar) return null;

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={true} key={currentSnackbar.id}>
                <MuiAlert elevation={6} variant="filled" severity={currentSnackbar.severity}>
                    {currentSnackbar.text}
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default SnackbarQueueHandler;
