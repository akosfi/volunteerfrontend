import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
//
import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import Badge from "components/common/Badge";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%"
    },
    image: {
        height: 202,
        width: 320,
        cursor: "pointer"
    },
    content: {
        padding: "12px 12px 0 12px",
        cursor: "pointer",
        userSelect: "none"
    },
    title: {
        fontWeight: "bold",
        fontSize: "16px",
        color: "#000000",
        marginBottom: "4px"
    },
    details: {
        fontSize: "12px",
        color: "#000000",
        marginBottom: "8px"
    },
    timeHeader: {
        fontWeight: "bold",
        fontSize: "12px",
        color: "#000000",
        textDecoration: "underline"
    },
    timeDetails: {
        fontSize: "12px",
        color: "#000000"
    },
    button: {
        background: "#FFB775",
        color: "black",
        width: "134px"
    },
    selectFormControl: {
        minWidth: 120,
        padding: "8px 0"
    },
    actions: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

export type Props = {
    eventId: number;
};

const EventListItem: FC<Props> = ({ eventId }) => {
    const classes = useStyles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const navigateToEvent = () => history.push(`/events/${eventId}`);

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.image}
                image="http://hellogyor.hu/wp-content/uploads/2020/09/Gyorkoc.jpg"
                onClick={navigateToEvent}
            />
            <CardContent className={classes.content} onClick={navigateToEvent}>
                <Typography className={classes.title}>14. Győrkőcfesztivál</Typography>
                <Typography className={classes.details}>
                    A Vaskakas Bábszínház társulata, a fesztivál szervezői csalódottak voltak, hogy a 13.
                    Győrkőcfesztivált le kelle...
                </Typography>
                <Typography className={classes.timeHeader}>
                    <b>Időpont</b>
                </Typography>
                <Typography className={classes.timeDetails}>
                    2021.07.02. 17:00 <br />
                    2021.07.04. 19:00
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Badge title="Fesztivál" />
                <Button
                    title="Jelentkezés"
                    buttonType={ButtonType.POSITIVE_ACTION}
                    buttonSize={ButtonSize.NORMAL}
                    isLoading={isLoading}
                    onClick={() => setIsLoading(!isLoading)}
                />
            </CardActions>
        </Card>
    );
};

export default EventListItem;
