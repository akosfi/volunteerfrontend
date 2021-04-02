import * as React from "react";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";
import { noop } from "lodash";

const useStyles = makeStyles(() => ({
    root: {
        height: "54px",
        display: "inline-flex",
        alignItems: "center",
        color: "#A7A7A7",
        marginRight: "30px",
        boxSizing: "border-box",
        fontWeight: "bold",
        cursor: "pointer"
    },
    active: {
        color: "#000000",
        borderBottom: "1px solid #000000"
    }
}));

export type Props = {
    title: string;
    isActive?: boolean;
    onClick?: (args: any) => void;
};

const PageHeaderTab: FC<Props> = ({ title, isActive = false, onClick = noop }) => {
    const classes = useStyles();
    return (
        <div className={classnames(classes.root, { [classes.active]: isActive })} onClick={onClick}>
            {title}
        </div>
    );
};

export default PageHeaderTab;
