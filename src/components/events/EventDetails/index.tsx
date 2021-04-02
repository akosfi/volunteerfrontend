import React, { FC } from "react";
//
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";
import EventSelectors from "redux/events/selectors";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%"
    },
    container: {
        width: "75%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "60% 1fr 26%",
        marginTop: "28px"
    },
    coverWrapper: {
        height: "364px",
        width: "100%",
        marginBottom: "29px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px"
    },
    coverImage: {
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    paragraph: {
        paddingBottom: "30px"
    },
    paragraphTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        paddingBottom: "10px"
    },
    paragraphContent: {
        fontSize: "18"
    }
}));

const EventDetails: FC = () => {
    //TODO FROM redux
    const eventId = 1;
    const classes = useStyles();

    const event = useSelector((state: StoreState) => EventSelectors.getEventById(state, eventId));

    if (!event) return null;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div>
                    <div className={classes.coverWrapper}>
                        <img src={event.coverUrl} className={classes.coverImage} alt="Cover." />
                    </div>
                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Részletek</p>
                        <div className={classes.paragraph}>{event.details}</div>
                    </div>
                </div>
                <div />
                <div>
                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Időpont</p>
                        <div className={classes.paragraphContent}>{`${event.startDate} - ${event.endDate}`}</div>
                    </div>

                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Helyszín</p>
                        <div className={classes.paragraphContent}>{event.location}</div>
                    </div>

                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Elérhetőség</p>
                        <div className={classes.paragraphContent}>{event.contact}</div>
                    </div>

                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Kategória</p>
                        <div className={classes.paragraphContent}>{event.category}</div>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default EventDetails;
