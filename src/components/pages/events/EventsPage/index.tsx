import React, { FC } from "react";
import { useSelector } from "react-redux";
//
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import EventList from "components/events/EventList";
import { getEventIds } from "redux/events/selectors";
import PageLayout, { PageHeaderTabType } from "components/common/PageLayout";

const EventsPage: FC = () => {
    const eventIds = useSelector(getEventIds);

    const tabs: PageHeaderTabType[] = [
        { id: 1, name: "Összes", content: <EventList eventIds={eventIds} /> },
        { id: 2, name: "Aktív", content: <EventList eventIds={eventIds} /> }
    ];

    return (
        <PageLayout title={"Események"} tabs={tabs}>
            {{
                upperAction: <></>,
                actionButtons: (
                    <>
                        <Button
                            title="Esemény felvétel"
                            buttonType={ButtonType.POSITIVE_ACTION}
                            buttonSize={ButtonSize.BIG}
                        />
                    </>
                )
            }}
        </PageLayout>
    );
};

export default EventsPage;
