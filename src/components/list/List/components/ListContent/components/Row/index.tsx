import React from "react";
import { createElement, FC, memo } from "react";
import { map, keys, defer } from "lodash";
import { useDispatch } from "react-redux";
//
import { ListConfig } from "components/pages/events/EventPage/components/tabs/MembersTab/config/list";
import { Row as RowType } from "redux/list/types";
//
import css from "./style.module.scss";
import { listActions } from "../../../../../../../redux/list/slice";

type Props = { config: ListConfig; row: RowType };

const Row: FC<Props> = ({ config, row }) => {
    const { cells, id } = row;
    const dispatch = useDispatch();

    const handleOnMouseEnter = () => {
        dispatch(listActions.setHoveredRowId({ hoveredRowId: id }));
    };

    const handleOnMouseLeave = () => {
        dispatch(listActions.setHoveredRowId({ hoveredRowId: null }));
    };

    return (
        <div className={css["Row"]} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <div className={css["Row__content"]}>
                {map(keys(cells), cellKey => createElement(config.components[cellKey], { value: cells[cellKey].data }))}
            </div>
        </div>
    );
};

export default memo(Row);
