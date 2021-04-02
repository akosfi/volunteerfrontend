import * as React from "react";
import BuildIcon from "@material-ui/icons/Build";
import { FC, memo } from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "calc(100vh - 64px)"
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "36px"
    }
}));

const ComingSoonPage: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p className={classes.title}>Hamarosan...</p>
            <BuildIcon />
        </div>
    );
};

export default memo(ComingSoonPage);
