import React from "react";
import { Cell } from "redux/list/types";
import { FC, memo } from "react";
import classNames from "classnames";
//
import css from "./style.module.scss";

type Props = {
    value: string;
    className: string;
    contentClassName: string;
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
    isHovered: boolean;
};

//TODO FINISH COMPONENS
const ImageWithCheckbox: FC<Props> = ({
    cellData,
    className = "",
    contentClassName = "",
    isActive,
    setIsActive,
    isHovered
}) => (
    <div className={classNames(css["ImageWithCheckbox"], className)}>
        <div className={classNames(css["ImageWithCheckbox__content"], contentClassName)}>{cellData.data}</div>
    </div>
);

export default memo(ImageWithCheckbox);
