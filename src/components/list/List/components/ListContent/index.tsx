import { FC, memo } from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
import React from "react";
//
import { ListConfig } from "components/pages/events/EventPage/components/tabs/MembersTab/config/list";
import ListSelectors from "redux/list/selectors";
import Row from "components/list/List/components/ListContent/components/Row";
//
import css from "./style.module.scss";

type Props = {
    config: ListConfig;
};
const ListContent: FC<Props> = ({ config }) => {
    const rows = useSelector(ListSelectors.getRows);

    return (
        <div className={css["ListContent"]}>
            <div className={css["ListContent__content"]}>
                {map(rows, (row, index) => (
                    <Row row={row} config={config} key={index} />
                ))}
            </div>
        </div>
    );
};

export default memo(ListContent);