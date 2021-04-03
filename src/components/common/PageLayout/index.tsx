import React, { FC, useState } from "react";
import { filter, find, get, map } from "lodash";
import { CircularProgress, makeStyles } from "@material-ui/core";
//
import PageHeader, {
    PageHeaderActionButtonType,
    PageHeaderTabType,
    PageHeaderUpperActionType
} from "components/common/PageHeader";
import PageHeaderTab from "components/common/PageHeader/components/PageHeaderTab";
import { useSelector } from "react-redux";
import UiSelectors from "redux/ui/selectors";

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

    const isMobile = useSelector(UiSelectors.getIsMobileWindow);

    const initialTabId = get(tabs, "[0].id", null);
    const [activeTabId, setActiveTabId] = useState(initialTabId);

    const enabledTabs = filter(tabs, ({ disabled }) => !disabled);

    const activeTabContent = get(
        find(enabledTabs, ({ id: _id }) => _id === activeTabId),
        "content",
        null
    );

    const enabledActionButtons = filter(
        actionButtons,
        actionButton =>
            !actionButton.tabsOnly || (!!actionButton.tabsOnly && !!actionButton.tabsOnly.includes(activeTabId))
    );

    const numberOfActionButtons = enabledActionButtons?.length || 0;
    const extraPaddingOnBottom = isMobile && numberOfActionButtons > 0 ? numberOfActionButtons * (36 + 16) + 16 : 0;

    return (
        <>
            <PageHeader
                title={title}
                isLoading={isLoading}
                actionButtons={enabledActionButtons}
                upperAction={upperAction}
            >
                {{
                    tabButtons: map(enabledTabs, ({ name, id }) => (
                        <PageHeaderTab title={name} isActive={id === activeTabId} onClick={() => setActiveTabId(id)} />
                    ))
                }}
            </PageHeader>
            <div className={classes.root} style={{ paddingBottom: `${extraPaddingOnBottom}px` }}>
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
