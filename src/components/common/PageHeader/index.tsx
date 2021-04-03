import * as React from "react";
import { FC, ReactNode } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { map } from "lodash";
import Button, { ButtonSize, ButtonType } from "../Button";
import PageHeaderUpperAction from "./components/PageHeaderUpperAction";
import ActionButtonContainerDesktop from "./components/ActionButtonContainerDesktop";
import ActionButtonContainerMobile from "./components/ActionButtonContainerMobile";
import { useSelector } from "react-redux";
import UiSelectors from "../../../redux/ui/selectors";

export type PageHeaderTabType = {
    id: string;
    name: string;
    content: ReactNode;
    disabled?: boolean;
    actionButtons?: ReactNode[];
};

export type PageHeaderActionButtonType = {
    id: number;
    title: string;
    tabsOnly?: string[];
    buttonType: ButtonType;
    disabled?: boolean;
};

export type PageHeaderUpperActionType = {
    title: string;
    href: string;
};

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "162px",
        background: "#F6F6F6"
    },
    hasTopMargin: {
        marginTop: "64px"
    },
    rows: {
        width: "75%",
        margin: "0 auto",
        background: "#F6F6F6",
        display: "flex",
        flexDirection: "column"
    },
    row: {
        flex: "0 0 54px",
        display: "flex",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: "40px"
    },
    actionButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actionButtonWrapper: {
        marginLeft: "20px"
    },
    tabButtons: {
        display: "flex"
    },
    loadingWrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export type Props = {
    title: string;
    children?: {
        tabButtons?: ReactNode;
    };
    isLoading?: boolean;
    actionButtons?: PageHeaderActionButtonType[];
    upperAction?: PageHeaderUpperActionType;
};

const PageHeader: FC<Props> = ({ title, children, isLoading = false, actionButtons, upperAction }) => {
    const classes = useStyles();

    if (isLoading) {
        return (
            <div className={classNames(classes.root, { [classes.hasTopMargin]: true })}>
                <div className={classes.loadingWrapper}>
                    <CircularProgress />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(classes.root, { [classes.hasTopMargin]: true })}>
            <div className={classes.rows}>
                <div className={classes.row}>
                    {!!upperAction ? <PageHeaderUpperAction title={upperAction.title} href={upperAction.href} /> : null}
                </div>

                <div className={classNames(classes.row, classes.actionButtons)}>
                    <span className={classes.title}>{title}</span>
                    <ActionButtonContainerDesktop actionButtons={actionButtons} />
                </div>
                <div className={classes.row}>{children?.tabButtons}</div>
            </div>
            <ActionButtonContainerMobile actionButtons={actionButtons} />
        </div>
    );
};

export default PageHeader;
