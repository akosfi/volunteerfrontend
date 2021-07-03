import * as React from "react";
import { FC, memo, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
//
import { eventActions } from "redux/events/slice";
import createMemberListConfig from "components/pages/events/EventPage/components/tabs/MembersTab/config/list";
import List from "components/list/List";
//
import css from "./style.module.scss";

const MembersTab: FC = () => {
    const config = useMemo(createMemberListConfig, []);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventActions.loadEventMembersRequest({ transformer: config.rawDataToRowDataTransformer }));
    }, []);

    return (
        <div className={css["MembersTab"]}>
            <List config={config} />
        </div>
    );
};

export default memo(MembersTab);
