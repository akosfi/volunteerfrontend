import { FC, ReactNode } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

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
        justifyContent: "space-between"
    },
    tabButtons: {
        display: "flex"
    }
}));

export type Props = {
    title: string;
    children?: {
        upperAction?: ReactNode;
        actionButtons?: ReactNode;
        tabButtons?: ReactNode;
    };
};

const PageHeader: FC<Props> = ({ title, children }) => {
    const classes = useStyles();
    return (
        <div className={classNames(classes.root, { [classes.hasTopMargin]: true })}>
            <div className={classes.rows}>
                <div className={classes.row}>{children?.upperAction}</div>
                <div className={classNames(classes.row, classes.actionButtons)}>
                    <span className={classes.title}>{title}</span>
                    <div>{children?.actionButtons}</div>
                </div>
                <div className={classes.row}>{children?.tabButtons}</div>
            </div>
        </div>
    );
};

export default PageHeader;
