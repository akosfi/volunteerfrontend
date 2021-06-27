import React from "react";
import { FC, memo } from "react";
import classNames from "classnames";
import { Checkbox } from "@material-ui/core";
//
import css from "./style.module.scss";

type Props = {
    value: string;
    isSelected: boolean;
    toggleIsSelected: () => void;
    contentClassName?: string;
    className?: string;
};

const ImageWithCheckbox: FC<Props> = ({ className = "", contentClassName = "", isSelected, toggleIsSelected }) => (
    <div className={classNames(css["ImageWithCheckbox"], className)} onClick={toggleIsSelected}>
        <div className={classNames(css["ImageWithCheckbox__content"], contentClassName)}>
            <Checkbox checked={isSelected} />
        </div>
    </div>
);

export default memo(ImageWithCheckbox);
