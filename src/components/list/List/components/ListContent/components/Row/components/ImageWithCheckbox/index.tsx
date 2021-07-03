import React from "react";
import { FC, memo } from "react";
import classNames from "classnames";
import { Checkbox } from "@material-ui/core";
import { useSelector } from "react-redux";
//
import ListSelectors from "redux/list/selectors";
//
import css from "./style.module.scss";

type Props = {
    value: string;
    isSelected: boolean;
    rowId: number;
    toggleIsSelected: () => void;
    contentClassName?: string;
    className?: string;
};

const ImageWithCheckbox: FC<Props> = ({
    value,
    className = "",
    contentClassName = "",
    isSelected,
    toggleIsSelected,
    rowId
}) => {
    const hoveredRowId = useSelector(ListSelectors.getHoveredRowId);
    const isHovered = hoveredRowId === rowId;

    return (
        <div className={classNames(css["ImageWithCheckbox"], className)}>
            <div className={classNames(css["ImageWithCheckbox__content"], contentClassName)}>
                {isHovered || isSelected ? (
                    <Checkbox checked={isSelected} onClick={toggleIsSelected} />
                ) : (
                    <div className={css["ImageWithCheckbox__content__image"]}>
                        <img src={value} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(ImageWithCheckbox);
