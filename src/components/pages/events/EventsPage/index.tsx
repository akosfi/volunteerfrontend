import * as React from "react";
import { FC, memo } from "react";
//
import { ButtonType } from "components/common/Button";
import { PageHeaderActionButtonType, PageHeaderTabType } from "components/common/PageHeader";
import PageLayout from "components/common/PageLayout";
import AllEventTab from "components/pages/events/EventsPage/components/tabs/AllEventTab";

enum TabTypes {
    ALL = "EVENTS/ALL"
}

const tabs: PageHeaderTabType[] = [{ id: TabTypes.ALL, name: "Összes", content: <AllEventTab /> }];

const actionButtons: PageHeaderActionButtonType[] = [
    { id: 1, buttonType: ButtonType.POSITIVE_ACTION, title: "Esemény felvétele" }
];

const EventsPage: FC = () => <PageLayout title={"Események"} tabs={tabs} actionButtons={actionButtons} />;

export default memo(EventsPage);
