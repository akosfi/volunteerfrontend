import React from "react";
import { FC, memo } from "react";
import classNames from "classnames";
import { Checkbox } from "@material-ui/core";
//

//
import css from "./style.module.scss";

type Props = {
    isSelected: boolean;
    toggleIsSelected: () => void;
    contentClassName?: string;
    className?: string;
};

const CheckboxHeaderCell: FC<Props> = ({ className = "", contentClassName = "", isSelected }) => {
    return (
        <div className={classNames(css["CheckboxHeaderCell"], className)}>
            <div className={classNames(css["CheckboxHeaderCell__content"], contentClassName)}>
                <Checkbox checked={isSelected} onClick={() => ""} />
            </div>
        </div>
    );
};

export default memo(CheckboxHeaderCell);
