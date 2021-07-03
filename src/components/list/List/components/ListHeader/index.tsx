import { createElement, FC, memo } from "react";
import React from "react";
import { map } from "lodash";
//
import { ListConfig } from "components/list/List/types";
//
import css from "./style.module.scss";

type Props = {
    config: ListConfig;
};
const ListHeader: FC<Props> = ({ config }) => {
    return (
        <div className={css["ListHeader"]}>
            <div className={css["ListHeader__content"]}>
                {map(config.headerComponents, component => createElement(component))}
            </div>
        </div>
    );
};

export default memo(ListHeader);
