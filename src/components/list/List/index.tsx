import { FC, memo } from "react";
import React from "react";
//
import ListContent from "components/list/List/components/ListContent";
import { ListConfig } from "components/list/List/types";
import ListHeader from "components/list/List/components/ListHeader";

type Props = {
    config: ListConfig;
};
const List: FC<Props> = ({ config }) => {
    return (
        <>
            <ListHeader config={config} />
            <ListContent config={config} />
        </>
    );
};

export default memo(List);
