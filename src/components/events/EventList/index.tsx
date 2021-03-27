import { FC, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { map } from "lodash";
import classNames from "classnames";
//
import EventListItem from "./components/EventListItem";
//
import css from "./style.module.scss";

const useStyles = makeStyles(() => ({
    root: {},
    container: {
        width: "75vw",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    },
    containerItem: {
        flex: "0 0 320px",
        marginBottom: "72px",
        maxWidth: "320px"
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
    //TODO FIX ME
    //const router = useHistory();
    const router = {
        asPath: "fix"
    };

    const saveScrollPosition = () => (scrollProperties.scrollY = window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", saveScrollPosition);

        window.scrollTo(0, scrollProperties.scrollY);

        return () => {
            window.removeEventListener("scroll", saveScrollPosition);
        };
    }, [router.asPath]);

    return (
        <div className={classNames(classes.root, css["EventList"])}>
            <div className={classNames(classes.container, css["container"])}>
                {map(eventIds, eventId => (
                    <div className={classNames(classes.containerItem, css["container-item"])}>
                        <EventListItem key={eventId} eventId={eventId} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventList;
