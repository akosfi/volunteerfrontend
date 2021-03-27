import { FC, useEffect } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { map } from "lodash";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
//
import EventListItem from "./components/EventListItem";
import { getIsEventsLoading } from "redux/events/selectors";
//
import css from "./style.module.scss";

const useStyles = makeStyles(() => ({
    root: {},
    container: {
        width: "75vw",
        margin: "22px auto 0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    },
    containerItem: {
        flex: "0 0 320px",
        marginBottom: "72px",
        maxWidth: "320px"
    },
    loadingWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        width: "100%"
    }
}));

type ScrollProperties = {
    scrollY: number;
};

const scrollProperties: ScrollProperties = {
    scrollY: 0
};

export type Props = {
    eventIds: number[];
};

const EventList: FC<Props> = ({ eventIds }) => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const isEventsLoading = useSelector(getIsEventsLoading);

    const saveScrollPosition = () => (scrollProperties.scrollY = window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", saveScrollPosition);
        window.scrollTo(0, scrollProperties.scrollY);
        return () => {
            window.removeEventListener("scroll", saveScrollPosition);
        };
    }, [pathname]);

    return (
        <div className={classNames(classes.root, css["EventList"])}>
            <div className={classNames(classes.container, css["container"])}>
                {isEventsLoading ? (
                    <div className={classes.loadingWrapper}>
                        <CircularProgress />
                    </div>
                ) : null}
                {map(eventIds, eventId => (
                    <div key={eventId} className={classNames(classes.containerItem, css["container-item"])}>
                        <EventListItem key={eventId} eventId={eventId} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventList;
