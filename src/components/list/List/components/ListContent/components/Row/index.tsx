import React from "react";
import { createElement, FC, memo } from "react";
import { map, keys } from "lodash";
import { useSelector } from "react-redux";
import classNames from "classnames";
//
import { ListConfig } from "components/pages/events/EventPage/components/tabs/MembersTab/config/list";
import { Row as RowType } from "redux/list/types";
import ListSelectors from "redux/list/selectors";
//
import css from "./style.module.scss";

type Props = { config: ListConfig; row: RowType };

const Row: FC<Props> = ({ config, row }) => {
    const { cells, id } = row;
    const isSelected = useSelector(ListSelectors.getIsRowSelected(id));

    return (
        <div className={classNames(css["Row"], { [css["Row-is-highlighted"]]: isSelected })}>
            <div className={css["Row__content"]}>
                {map(keys(cells), cellKey =>
                    createElement(config.components[cellKey], { value: cells[cellKey].data, rowId: id })
                )}
            </div>
        </div>
    );
};

export default memo(Row);
