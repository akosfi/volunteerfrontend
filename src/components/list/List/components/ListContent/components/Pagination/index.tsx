import { FC, memo } from "react";
import React from "react";
//
//
import css from "./style.module.scss";

type Props = {};

const Pagination: FC<Props> = () => {
    return <div className={css["Pagination"]}>Pagination</div>;
};

export default memo(Pagination);
