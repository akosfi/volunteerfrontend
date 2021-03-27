import React, { FC } from "react";
import { useSelector } from "react-redux";
//
import PageHeader from "components/common/PageHeader";
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import PageHeaderTab from "components/common/PageHeader/components/PageHeaderTab";
import EventList from "components/events/EventList";
import { getEventIds } from "redux/events/selectors";

const EventsPage: FC = () => {
    const eventIds = useSelector(getEventIds);

    return (
        <>
            <PageHeader title="Események">
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
                    ),
                    tabButtons: (
                        <>
                            <PageHeaderTab title="Összes" isActive />
                            <PageHeaderTab title="Aktív" />{" "}
                        </>
                    )
                }}
            </PageHeader>
            <EventList eventIds={eventIds} />
        </>
    );
};

export default EventsPage;
