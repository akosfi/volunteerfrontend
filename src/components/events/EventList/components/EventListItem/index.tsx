import * as React from "react";
import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
//
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import Badge from "components/common/Badge";
import { StoreState } from "redux/state";
import EventSelectors from "redux/events/selectors";
import EllipsedText from "components/common/EllipsedText";
import EventActions from "redux/events/actions";

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
    const event = useSelector((state: StoreState) => EventSelectors.getEventById(state, eventId));
    const dispatch = useDispatch();
    const [isLoading] = useState(false);

    const classes = useStyles();

    const history = useHistory();

    const navigateToEvent = () => history.push(`/events/${eventId}`);

    const handleEventJoin = () => dispatch(EventActions.joinEventsAction(eventId));

    if (!event) return null;

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.image} image={event.coverUrl} onClick={navigateToEvent} />
            <CardContent className={classes.content} onClick={navigateToEvent}>
                <Typography className={classes.title}>{event.name}</Typography>
                <Typography className={classes.details}>
                    <EllipsedText text={event.details} maxCharacters={120} />
                </Typography>
                <Typography className={classes.timeHeader}>
                    <b>Időpont</b>
                </Typography>
                <Typography className={classes.timeDetails}>
                    {event.startDate} <br />
                    {event.endDate}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Badge title={event.category} />
                <Button
                    title="Jelentkezés"
                    buttonType={ButtonType.POSITIVE_ACTION}
                    buttonSize={ButtonSize.NORMAL}
                    isLoading={isLoading}
                    onClick={handleEventJoin}
                />
            </CardActions>
        </Card>
    );
};

export default EventListItem;
