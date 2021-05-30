import React from "react";
import { createElement, FC, memo } from "react";
import { map, keys } from "lodash";
//
import { ListConfig } from "components/pages/events/EventPage/components/tabs/MembersTab/config/list";
import { Row as RowType } from "redux/list/types";
//
import css from "./style.module.scss";

type Props = { config: ListConfig; row: RowType };

const Row: FC<Props> = ({ config, row }) => {
    return (
        <div className={css["Row"]}>
            <div className={css["Row__content"]}>
                {map(keys(row.cells), cellKey =>
                    createElement(config.components[cellKey], { value: row.cells[cellKey].data })
                )}
            </div>
        </div>
    );
};

export default memo(Row);
