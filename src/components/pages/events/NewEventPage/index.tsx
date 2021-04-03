import * as React from "react";
import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import PageLayout from "components/common/PageLayout";
import { PageHeaderActionButtonType, PageHeaderTabType, PageHeaderUpperActionType } from "components/common/PageHeader";
import { ButtonType } from "components/common/Button";
import EventActions from "redux/events/actions";
import EditTab from "components/pages/events/EventPage/components/tabs/EditTab";

enum TabTypes {
    EDIT = "NEW_EVENT/EDIT"
}

const tabs: PageHeaderTabType[] = [{ id: TabTypes.EDIT, name: "Szerkesztés", content: <EditTab /> }];

const upperAction: PageHeaderUpperActionType = {
    title: "Események",
    href: "/"
};

const NewEventPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(EventActions.setEditedEventId(-1));
    }, []);

    const actionButtons: PageHeaderActionButtonType[] = [
        { id: 1, buttonType: ButtonType.BASIC, title: "Vázlat mentése" },
        { id: 2, buttonType: ButtonType.POSITIVE_ACTION, title: "MENTÉS" }
    ];

    return (
        <PageLayout
            title={"Új esemény felvétele"}
            tabs={tabs}
            actionButtons={actionButtons}
            upperAction={upperAction}
        />
    );
};

export default memo(NewEventPage);
