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
import EventActions from "redux/events/actions";
import EditTab from "components/pages/events/EventPage/components/tabs/EditTab";

enum TabTypes {
    EDIT = "NEW_EVENT/EDIT"
}

const tabs: PageHeaderTabType[] = [{ id: TabTypes.EDIT, name: "Szerkesztés", content: <EditTab /> }];

const actionButtons: PageHeaderActionButtonType[] = [
    { id: 1, buttonType: ButtonType.BASIC, title: "Vázlat mentése" },
    { id: 2, buttonType: ButtonType.POSITIVE_ACTION, title: "MENTÉS" }
];

const upperAction: PageHeaderUpperActionType = {
    title: "Események",
    href: "/"
};

const NewEventPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(EventActions.setEditedEventId(-1));
    }, []);

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
