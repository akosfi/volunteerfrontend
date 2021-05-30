import { FC, memo } from "react";
import React from "react";
import ListContent from "./components/ListContent";
import { ListConfig } from "../../pages/events/EventPage/components/tabs/MembersTab/config/list";

type Props = {
    config: ListConfig;
};
const List: FC<Props> = ({ config }) => {
    return <ListContent config={config} />;
};

export default memo(List);
