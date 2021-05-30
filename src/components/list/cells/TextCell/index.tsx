import React from "react";
import { Cell } from "redux/list/types";
import { FC, memo } from "react";
import classNames from "classnames";
//
import css from "./style.module.scss";

type Props = {
    cellData: Cell;
    className: string;
    contentClassName: string;
};

const TextCell: FC<Props> = ({ cellData, className = "", contentClassName = "" }) => (
    <div className={classNames(css["TextCell"], className)}>
        <div className={classNames(css["TextCell__content"], contentClassName)}>{cellData.data}</div>
    </div>
);

export default memo(TextCell);
