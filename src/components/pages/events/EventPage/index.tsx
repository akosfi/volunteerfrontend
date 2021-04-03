import * as React from "react";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import { StoreState } from "redux/state";
import EventSelectors from "redux/events/selectors";
import PageLayout from "components/common/PageLayout";
import { PageHeaderActionButtonType, PageHeaderTabType, PageHeaderUpperActionType } from "components/common/PageHeader";
import { ButtonType } from "components/common/Button";
import EventActions from "redux/events/actions";
import DetailsTab from "components/pages/events/EventPage/components/tabs/DetailsTab";
import EditTab from "components/pages/events/EventPage/components/tabs/EditTab";

enum TabTypes {
    GENERAL_INFORMATION = "EVENT/GENERAL_INFORMATION",
    EDIT = "EVENT/EDIT",
    MEMBERS = "EVENT/MEMBERS",
    PLUSZ_TAB = "EVENT/PLUSZ_TAB"
}

const tabs: PageHeaderTabType[] = [
    { id: TabTypes.GENERAL_INFORMATION, name: "Részletek", content: <DetailsTab /> },
    { id: TabTypes.EDIT, name: "Szerkesztés", content: <EditTab /> }
];

const actionButtons: PageHeaderActionButtonType[] = [
    { id: 1, buttonType: ButtonType.POSITIVE_ACTION, title: "JELENTKEZÉS" },
    { id: 2, buttonType: ButtonType.POSITIVE_ACTION, title: "MENTÉS", tabsOnly: [TabTypes.EDIT] }
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
        dispatch(EventActions.setEditedEventId(eventId));

        return () => {
            dispatch(EventActions.setEditedEventId(null));
        };
    }, [id]);

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

export default EventPage;
