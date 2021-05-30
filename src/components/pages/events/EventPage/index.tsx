import * as React from "react";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import { StoreState } from "redux/state";
import EventSelectors from "redux/events/selectors";
import PageLayout from "components/common/PageLayout";
import { PageHeaderActionButtonType, PageHeaderTabType, PageHeaderUpperActionType } from "components/common/PageHeader";
import { ButtonType } from "components/common/Button";
import { eventActions } from "redux/events/slice";
import DetailsTab from "components/pages/events/EventPage/components/tabs/DetailsTab";
import EditTab from "components/pages/events/EventPage/components/tabs/EditTab";
import MembersTab from "components/pages/events/EventPage/components/tabs/MembersTab";

enum TabTypes {
    GENERAL_INFORMATION = "EVENT/GENERAL_INFORMATION",
    MEMBERS = "EVENT/MEMBERS",
    EDIT = "EVENT/EDIT"
}

const tabs: PageHeaderTabType[] = [
    { id: TabTypes.GENERAL_INFORMATION, name: "Részletek", content: <DetailsTab /> },
    { id: TabTypes.MEMBERS, name: "Jelentkezők", content: <MembersTab /> },
    { id: TabTypes.EDIT, name: "Szerkesztés", content: <EditTab /> }
];

const upperAction: PageHeaderUpperActionType = {
    title: "Események",
    href: "/"
};

const EventPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const eventId = Number(id);
    //
    const event = useSelector((state: StoreState) => EventSelectors.getEventById(state, eventId));
    const isEventsLoading = useSelector((state: StoreState) => EventSelectors.getIsEventsLoading(state));
    const dispatch = useDispatch();
    //

    useEffect(() => {
        dispatch(eventActions.setEditedEventId({ eventId }));

        return () => {
            dispatch(eventActions.setEditedEventId({ eventId: null }));
        };
    }, [id]);

    const handleEventJoin = () => dispatch(eventActions.joinEventRequest({ eventId }));

    const actionButtons: PageHeaderActionButtonType[] = [
        {
            id: 1,
            buttonType: ButtonType.POSITIVE_ACTION,
            title: "JELENTKEZÉS",
            tabsOnly: [TabTypes.GENERAL_INFORMATION],
            onClick: handleEventJoin
        },
        { id: 2, buttonType: ButtonType.BASIC, title: "Törlés", tabsOnly: [TabTypes.EDIT] },
        { id: 3, buttonType: ButtonType.BASIC, title: "Vázlat mentése", tabsOnly: [TabTypes.EDIT] },
        { id: 4, buttonType: ButtonType.POSITIVE_ACTION, title: "Mentés", tabsOnly: [TabTypes.EDIT] }
    ];

    return (
        <PageLayout
            title={event?.name || ""}
            tabs={tabs}
            isLoading={isEventsLoading}
            actionButtons={actionButtons}
            upperAction={upperAction}
        />
    );
};

export default memo(EventPage);
