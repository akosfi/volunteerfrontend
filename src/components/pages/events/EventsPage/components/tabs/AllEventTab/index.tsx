import * as React from "react";
import { useSelector } from "react-redux";
import { FC, memo } from "react";
//
import EventSelectors from "redux/events/selectors";
import EventList from "components/events/EventList";

const AllEventTab: FC = () => {
    const eventIds = useSelector(EventSelectors.getEventIds);
    return <EventList eventIds={eventIds} />;
};

export default memo(AllEventTab);
