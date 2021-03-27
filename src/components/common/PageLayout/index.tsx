import React, { FC, ReactNode, useState } from "react";
import { filter, find, get, map } from "lodash";
//
import PageHeader from "components/common/PageHeader";
import PageHeaderTab from "components/common/PageHeader/components/PageHeaderTab";

export type PageHeaderTabType = {
    id: number;
    name: string;
    content: ReactNode;
    disabled?: boolean;
};

export type Props = {
    title: string;
    children?: {
        upperAction?: ReactNode;
        actionButtons?: ReactNode;
    };
    tabs: PageHeaderTabType[];
};

const PageLayout: FC<Props> = ({ title, children, tabs }) => {
    //TODO url param?
    const initialTabId = get(tabs, "[0].id", null);
    const [activeTabId, setActiveTabId] = useState(initialTabId);

    const enabledTabs = filter(tabs, ({ disabled }) => !disabled);

    const activeTabContent = get(
        find(enabledTabs, ({ id: _id }) => _id === activeTabId),
        "content",
        null
    );

    return (
        <>
            <PageHeader title={title}>
                {{
                    upperAction: children?.upperAction,
                    actionButtons: children?.actionButtons,
                    tabButtons: map(enabledTabs, ({ name, id }) => (
                        <PageHeaderTab title={name} isActive={id === activeTabId} onClick={() => setActiveTabId(id)} />
                    ))
                }}
            </PageHeader>
            {activeTabContent}
        </>
    );
};

export default PageLayout;
