import * as React from "react";
import { FC, memo } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//
import UiSelectors from "redux/ui/selectors";
import Button, { ButtonType } from "components/common/Button";

const SystemErrorAlert: FC = () => {
    const systemError = useSelector(UiSelectors.getSystemError);
    const { pathname } = useLocation();

    const hardRefreshPage = () => ((window as any).top.location = pathname || "/");

    if (!systemError) return null;

    return (
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={true}>
            <MuiAlert
                elevation={6}
                variant="filled"
                severity={"error"}
                action={<Button onClick={hardRefreshPage} title={"REFRESH"} buttonType={ButtonType.NEGATIVE_ACTION} />}
            >
                {systemError}
            </MuiAlert>
        </Snackbar>
    );
};

export default memo(SystemErrorAlert);
