import * as React from "react";
import { FC, memo } from "react";
//
import { ButtonType } from "components/common/Button";
import { PageHeaderActionButtonType, PageHeaderTabType } from "components/common/PageHeader";
import PageLayout from "components/common/PageLayout";
import AllEventTab from "components/pages/events/EventsPage/components/tabs/AllEventTab";
import useNavigation from "utils/hooks/useNavigation";

enum TabTypes {
    ALL = "EVENTS/ALL"
}

const tabs: PageHeaderTabType[] = [{ id: TabTypes.ALL, name: "Összes", content: <AllEventTab /> }];

const EventsPage: FC = () => {
    const { createNavigationHandler } = useNavigation();

    const actionButtons: PageHeaderActionButtonType[] = [
        {
            id: 1,
            buttonType: ButtonType.POSITIVE_ACTION,
            title: "Esemény felvétele",
            onClick: createNavigationHandler("/events/new")
        }
    ];

    return <PageLayout title={"Események"} tabs={tabs} actionButtons={actionButtons} />;
};

export default memo(EventsPage);
