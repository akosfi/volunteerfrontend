import React, { FC, ReactNode, useState } from "react";
import { filter, find, get, map } from "lodash";
import { CircularProgress, makeStyles } from "@material-ui/core";
//
import PageHeader, {
    PageHeaderActionButtonType,
    PageHeaderTabType,
    PageHeaderUpperActionType
} from "components/common/PageHeader";
import PageHeaderTab from "components/common/PageHeader/components/PageHeaderTab";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "100%"
    },
    loadingWrapper: {
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export type Props = {
    title: string;
    tabs: PageHeaderTabType[];
    actionButtons: PageHeaderActionButtonType[];
    upperAction?: PageHeaderUpperActionType;
    isLoading?: boolean;
};

const PageLayout: FC<Props> = ({ title, tabs, isLoading = false, actionButtons, upperAction }) => {
    const classes = useStyles();

    const initialTabId = get(tabs, "[0].id", null);
    const [activeTabId, setActiveTabId] = useState(initialTabId);

    const enabledTabs = filter(tabs, ({ disabled }) => !disabled);

    const activeTabContent = get(
        find(enabledTabs, ({ id: _id }) => _id === activeTabId),
        "content",
        null
    );

    const enabledActionButton = filter(
        actionButtons,
        actionButton =>
            !actionButton.tabsOnly || (!!actionButton.tabsOnly && !!actionButton.tabsOnly.includes(activeTabId))
    );

    return (
        <>
            <PageHeader
                title={title}
                isLoading={isLoading}
                actionButtons={enabledActionButton}
                upperAction={upperAction}
            >
                {{
                    tabButtons: map(enabledTabs, ({ name, id }) => (
                        <PageHeaderTab title={name} isActive={id === activeTabId} onClick={() => setActiveTabId(id)} />
                    ))
                }}
            </PageHeader>
            <div className={classes.root}>
                {isLoading ? (
                    <div className={classes.loadingWrapper}>
                        <CircularProgress />
                    </div>
                ) : (
                    activeTabContent
                )}
            </div>
        </>
    );
};

export default PageLayout;
