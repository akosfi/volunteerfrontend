import * as React from "react";
import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import { eventActions } from "redux/events/slice";

const MembersTab: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventActions.loadEventMembersRequest());
    }, []);

    return <div>asd</div>;
};

export default memo(MembersTab);
