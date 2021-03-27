import React, { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
//
import PageHeader from "components/common/PageHeader";
import Button, { ButtonSize, ButtonType } from "components/common/Button";
import PageHeaderTab from "components/common/PageHeader/components/PageHeaderTab";
import { StoreState } from "redux/state";
import { getEventById } from "redux/events/selectors";

const EventPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    const event = useSelector((state: StoreState) => getEventById(state, Number(id)));
    return (
        <>
            <PageHeader title="14. Győrköcfesztívál">
                {{
                    upperAction: (
                        <>
                            <Link to={"/"}>
                                <span>{"< Események"}</span>
                            </Link>
                        </>
                    ),
                    actionButtons: (
                        <>
                            <Button
                                title="JELENTKEZÉS"
                                buttonType={ButtonType.POSITIVE_ACTION}
                                buttonSize={ButtonSize.BIG}
                            />
                        </>
                    ),
                    tabButtons: (
                        <>
                            <PageHeaderTab title="Részletek" isActive /> <PageHeaderTab title="Jelentkezők" />{" "}
                            <PageHeaderTab title="Szerkesztés" />
                        </>
                    )
                }}
            </PageHeader>
        </>
    );
};

export default EventPage;
