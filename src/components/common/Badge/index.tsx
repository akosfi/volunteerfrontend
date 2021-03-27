import { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        borderRadius: "5px",
        border: "2px solid #FF8743",
        color: "#FF8743",
        fontSize: "12px",
        padding: "1px 4px",
        display: "inline-block"
    }
}));

export type Props = {
    title: string;
};

const Badge: FC<Props> = ({ title }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span>{title}</span>
        </div>
    );
};

export default Badge;
