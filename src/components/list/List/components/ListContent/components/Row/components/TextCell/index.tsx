import React from "react";
import { FC, memo } from "react";
import classNames from "classnames";
//
import css from "./style.module.scss";

type Props = {
    value: string;
    className?: string;
    contentClassName?: string;
};

const TextCell: FC<Props> = ({ value, className = "", contentClassName = "" }) => (
    <div className={classNames(css["TextCell"], className)}>
        <div className={classNames(css["TextCell__content"], contentClassName)}>{value}</div>
    </div>
);

export default memo(TextCell);
