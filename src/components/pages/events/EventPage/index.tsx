import * as React from "react";
import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import EventDetails from "components/events/EventDetails";
import { StoreState } from "redux/state";
import EventSelectors from "redux/events/selectors";
import PageLayout, { PageHeaderTabType } from "components/common/PageLayout";
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import PageHeaderUpperAction from "components/common/PageHeader/components/PageHeaderUpperAction";
import EventActions from "redux/events/actions";
import EventEdit from "components/events/EventEdit";

const EventPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const eventId = Number(id);
    //
    const event = useSelector((state: StoreState) => EventSelectors.getEventById(state, eventId));
    const isEventsLoading = useSelector((state: StoreState) => EventSelectors.getIsEventsLoading(state));
    const dispatch = useDispatch();
    //
    const tabs: PageHeaderTabType[] = useMemo(() => {
        return [
            { id: 1, name: "Részletek", content: <EventDetails /> },
            { id: 2, name: "Szerkesztés", content: <EventEdit /> }
        ];
    }, [id]);

    useEffect(() => {
        dispatch(EventActions.setEditedEventId(eventId));

        return () => {
            dispatch(EventActions.setEditedEventId(null));
        };
    }, [id]);

    return (
        <PageLayout title={event?.name || ""} tabs={tabs} isLoading={isEventsLoading}>
            {{
                upperAction: <PageHeaderUpperAction title="Események" href="/" />,
                actionButtons: (
                    <>
                        <Button
                            title="JELENTKEZÉS"
                            buttonType={ButtonType.POSITIVE_ACTION}
                            buttonSize={ButtonSize.BIG}
                        />
                    </>
                )
            }}
        </PageLayout>
    );
};

export default EventPage;
