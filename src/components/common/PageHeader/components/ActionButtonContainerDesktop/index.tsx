import * as React from "react";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";
//
import { map } from "lodash";
import { PageHeaderActionButtonType } from "components/common/PageHeader/index";
import Button, { ButtonSize } from "components/common/Button";
import { useSelector } from "react-redux";
import UiSelectors from "../../../../../redux/ui/selectors";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actionButtonWrapper: {
        marginLeft: "20px"
    }
}));

export type Props = {
    actionButtons?: PageHeaderActionButtonType[];
};

const ActionButtonContainerDesktop: FC<Props> = ({ actionButtons }) => {
    const isMobile = useSelector(UiSelectors.getIsMobileWindow);

    const classes = useStyles();

    if (isMobile) return null;
    return (
        <div className={classes.root}>
            {map(actionButtons, button => (
                <div className={classes.actionButtonWrapper}>
                    <Button title={button.title} buttonType={button.buttonType} buttonSize={ButtonSize.BIG} />
                </div>
            ))}
        </div>
    );
};

export default ActionButtonContainerDesktop;
