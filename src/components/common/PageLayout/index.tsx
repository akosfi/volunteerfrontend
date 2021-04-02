import React, { FC, ReactNode, useState } from "react";
import { filter, find, get, map } from "lodash";
//
import PageHeader from "components/common/PageHeader";
import PageHeaderTab from "components/common/PageHeader/components/PageHeaderTab";
import { CircularProgress, makeStyles } from "@material-ui/core";

export type PageHeaderTabType = {
    id: number;
    name: string;
    content: ReactNode;
    disabled?: boolean;
};

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
    children?: {
        upperAction?: ReactNode;
        actionButtons?: ReactNode;
    };
    tabs: PageHeaderTabType[];
    isLoading?: boolean;
};

const PageLayout: FC<Props> = ({ title, children, tabs, isLoading = false }) => {
    const classes = useStyles();

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
            <PageHeader title={title} isLoading={isLoading}>
                {{
                    upperAction: children?.upperAction,
                    actionButtons: children?.actionButtons,
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
