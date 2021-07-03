import * as React from "react";
import { FC, ReactNode } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import classNames from "classnames";
//
import { ButtonType } from "components/common/Button";
import PageHeaderUpperAction from "components/common/PageLayout/components/PageHeader/components/PageHeaderUpperAction";
import ActionButtonContainerDesktop from "components/common/PageLayout/components/PageHeader/components/ActionButtonContainerDesktop";
import ActionButtonContainerMobile from "components/common/PageLayout/components/PageHeader/components/ActionButtonContainerMobile";

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
    onClick?: (args: any) => void;
};

export type PageHeaderUpperActionType = {
    title: string;
    href: string;
};

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "124px",
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
        flex: "0 0 41px",
        display: "flex",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: "24px",

        [theme.breakpoints.up("sm")]: {
            fontSize: "26px"
        }
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
        overflowX: "scroll",
        overflowY: "hidden",
        width: "75vw",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
            background: "transparent"
        }
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
                <div className={classNames(classes.row, classes.tabButtons)}>{children?.tabButtons}</div>
            </div>
            <ActionButtonContainerMobile actionButtons={actionButtons} />
        </div>
    );
};

export default PageHeader;
