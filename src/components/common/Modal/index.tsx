import { FC, ReactNode, useEffect } from "react";
import * as React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: "rgba(211, 211, 211, 0.3)"
    },
    scrollArea: {
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        position: "relative"
    },
    card: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "520px",
        padding: 0,
        margin: 0,
        zIndex: 11
    },
    cardContent: {
        padding: "28px 25px"
    },
    cardTitle: {
        fontSize: "16px",
        paddingBottom: "12px"
    }
});

export type Props = {
    title: string;
    children: ReactNode;
    onClose: () => void;
};

const Modal: FC<Props> = ({ title, children, onClose }) => {
    useEffect(() => {
        //TODO do ios hax
        document.body.classList.add("frozen");

        return () => document.body.classList.remove("frozen");
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div
                className={classes.scrollArea}
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClose();
                }}
            >
                <Card
                    className={classes.card}
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <CardContent className={classes.cardContent}>
                        <p className={classes.cardTitle}>{title}</p>
                        <div>{children}</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Modal;
