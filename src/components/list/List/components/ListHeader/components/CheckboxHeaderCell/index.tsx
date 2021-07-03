import React from "react";
import { FC, memo } from "react";
import classNames from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
//

//
import css from "./style.module.scss";

type Props = {
    isSelected: boolean;
    toggleIsSelected: () => void;
    contentClassName?: string;
    className?: string;
    indeterminateChecked?: boolean;
};

const CheckboxHeaderCell: FC<Props> = ({
    className = "",
    contentClassName = "",
    isSelected,
    toggleIsSelected,
    indeterminateChecked = false
}) => {
    return (
        <div className={classNames(css["CheckboxHeaderCell"], className)}>
            <div className={classNames(css["CheckboxHeaderCell__content"], contentClassName)}>
                <Checkbox
                    checked={isSelected && !indeterminateChecked}
                    onClick={toggleIsSelected}
                    indeterminate={isSelected && indeterminateChecked}
                />
            </div>
        </div>
    );
};

export default memo(CheckboxHeaderCell);
