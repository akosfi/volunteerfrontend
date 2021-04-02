import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {},
    link: {
        textDecoration: "none"
    },
    title: {
        color: "#989898",
        fontSize: "22px"
    }
}));

export type Props = {
    title: string;
    href: string;
};

const PageHeaderUpperAction: FC<Props> = ({ title, href }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to={href} className={classes.link}>
                <span className={classes.title}>{`< ${title}`}</span>
            </Link>
        </div>
    );
};

export default PageHeaderUpperAction;
