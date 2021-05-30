import * as React from "react";
import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import EventActions from "redux/events/actions";

const MembersTab: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(EventActions.loadEventMembersAction());
    }, []);

    return <div>asd</div>;
};

export default memo(MembersTab);
