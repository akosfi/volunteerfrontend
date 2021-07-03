import React from "react";
import { createElement, FC, memo } from "react";
import { map, keys } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
//
import { Row as RowType } from "redux/list/types";
import ListSelectors from "redux/list/selectors";
import { ListConfig } from "components/list/List/types";
import { listActions } from "redux/list/slice";
//
import css from "./style.module.scss";

type Props = { config: ListConfig; row: RowType };

const Row: FC<Props> = ({ config, row }) => {
    const { cells, id } = row;
    const isSelected = useSelector(ListSelectors.getIsRowSelected(id));

    const dispatch = useDispatch();

    const createHandleOnMouseEnter = (rowId: number) => () =>
        dispatch(listActions.setHoveredRowId({ hoveredRowId: rowId }));

    const handleOnMouseLeave = () => dispatch(listActions.setHoveredRowId({ hoveredRowId: null }));

    return (
        <div
            className={classNames(css["Row"], { [css["Row-is-highlighted"]]: isSelected })}
            onMouseEnter={createHandleOnMouseEnter(id)}
            onMouseLeave={handleOnMouseLeave}
        >
            <div className={css["Row__content"]}>
                {map(keys(cells), cellKey =>
                    createElement(config.components[cellKey], { value: cells[cellKey].data, rowId: id })
                )}
            </div>
        </div>
    );
};

export default memo(Row);
