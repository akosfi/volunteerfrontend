import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
//
import EventDetails from "components/events/EventDetails";
import { StoreState } from "redux/state";
import { getEventById } from "redux/events/selectors";
import PageLayout, { PageHeaderTabType } from "components/common/PageLayout";
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import PageHeaderUpperAction from "../../../common/PageHeader/components/PageHeaderUpperAction";

const EventPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = useSelector((state: StoreState) => getEventById(state, Number(id)));

    const tabs: PageHeaderTabType[] = useMemo(() => {
        return [
            { id: 1, name: "Részletek", content: <EventDetails /> },
            { id: 2, name: "Szerkesztés", content: <span>Szerkesztés</span> }
        ];
    }, [id]);

    return (
        <PageLayout title={event?.name || ""} tabs={tabs} isLoading={false}>
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
