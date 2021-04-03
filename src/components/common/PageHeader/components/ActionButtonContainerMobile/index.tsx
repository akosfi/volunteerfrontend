import * as React from "react";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import { PageHeaderActionButtonType } from "components/common/PageHeader/index";
import Button, { ButtonSize } from "components/common/Button";
import UiSelectors from "redux/ui/selectors";

const useStyles = makeStyles(() => ({
    root: {
        position: "fixed",
        bottom: 0,
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        paddingTop: "16px",
        zIndex: 100
    },
    actionButtonWrapper: {
        marginBottom: "16px",
        width: "75vw"
    }
}));

export type Props = {
    actionButtons?: PageHeaderActionButtonType[];
};

const ActionButtonContainerMobile: FC<Props> = ({ actionButtons }) => {
    const isMobile = useSelector(UiSelectors.getIsMobileWindow);

    const classes = useStyles();

    if (!isMobile) return null;
    return (
        <div className={classes.root}>
            {map(actionButtons, button => (
                <div className={classes.actionButtonWrapper}>
                    <Button title={button.title} buttonType={button.buttonType} buttonSize={ButtonSize.BIG} fullWidth />
                </div>
            ))}
        </div>
    );
};

export default ActionButtonContainerMobile;
