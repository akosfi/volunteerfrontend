import { FC, memo } from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
import React from "react";
//
import { ListConfig } from "components/pages/events/EventPage/components/tabs/MembersTab/config/list";
import ListSelectors from "redux/list/selectors";
import Row from "components/list/List/components/ListContent/components/Row";
//
import css from "./style.module.scss";

type Props = {};
const Pagination: FC<Props> = ({}) => {
    return <div className={css["Pagination"]}>Pagination</div>;
};

export default memo(Pagination);
