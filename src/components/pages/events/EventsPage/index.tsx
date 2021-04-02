import * as React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
//
import { ButtonType } from "components/common/Button";
import EventList from "components/events/EventList";
import EventSelectors from "redux/events/selectors";
import { PageHeaderActionButtonType, PageHeaderTabType } from "components/common/PageHeader";
import PageLayout from "components/common/PageLayout";

enum TabTypes {
    ALL = "EVENTS/ALL",
    ACTIVE = "EVENTS/ACTIVE"
}

const actionButtons: PageHeaderActionButtonType[] = [
    { id: 1, buttonType: ButtonType.POSITIVE_ACTION, title: "Esemény felvétele" }
];

const EventsPage: FC = () => {
    const eventIds = useSelector(EventSelectors.getEventIds);

    //TODO MOVE OUTSIDE OF COMPONENT
    const tabs: PageHeaderTabType[] = [
        { id: TabTypes.ALL, name: "Összes", content: <EventList eventIds={eventIds} /> },
        { id: TabTypes.ACTIVE, name: "Aktív", content: <EventList eventIds={eventIds} /> }
    ];

    return <PageLayout title={"Események"} tabs={tabs} actionButtons={actionButtons} />;
};

export default EventsPage;
