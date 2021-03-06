import * as React from "react";
import { FC } from "react";
//
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";
import EventSelectors from "redux/events/selectors";
import Badge from "components/common/Badge";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    container: {
        width: "75%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "100%",
        marginTop: "8px",
        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "60% 1fr 26%",
            marginTop: "28px"
        }
    },
    coverWrapper: {
        paddingTop: "75%",
        width: "100%",
        marginBottom: "8px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        [theme.breakpoints.up("sm")]: {
            marginBottom: "29px",
            paddingTop: "55%"
        }
    },
    coverImage: {
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    paragraph: {
        paddingBottom: "16px",
        [theme.breakpoints.up("sm")]: {
            paddingBottom: "30px"
        }
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
                        <p className={classes.paragraphTitle}>R??szletek</p>
                        <div className={classes.paragraphContent}>{event.details}</div>
                    </div>
                </div>
                <div />
                <div>
                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Id??pont</p>
                        <div className={classes.paragraphContent}>{`${event.startDate} - ${event.endDate}`}</div>
                    </div>

                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Helysz??n</p>
                        <div className={classes.paragraphContent}>{event.location}</div>
                    </div>

                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>El??rhet??s??g</p>
                        <div className={classes.paragraphContent}>{event.contact}</div>
                    </div>

                    <div className={classes.paragraph}>
                        <p className={classes.paragraphTitle}>Kateg??ria</p>
                        <div className={classes.paragraphContent}>
                            <Badge title={event.category} />
                        </div>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default EventDetails;
