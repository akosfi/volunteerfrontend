import React, { FC } from "react";
//
import PageHeader from "components/common/PageHeader";
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import PageHeaderTab from "components/common/PageHeader/components/PageHeaderTab";
import EventList from "components/events/EventList";

const EventsPage: FC = () => (
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
        <EventList eventIds={[2, 3, 4]} />
    </>
);

export default EventsPage;
