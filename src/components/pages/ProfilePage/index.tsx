import * as React from "react";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";
//
import { PageHeaderActionButtonType, PageHeaderTabType } from "../../common/PageLayout/components/PageHeader";
import EditTab from "../events/EventPage/components/tabs/EditTab";
import PageLayout from "../../common/PageLayout";
import { ButtonType } from "../../common/Button";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "100vh",
        background: "#F6F6F6"
    },
    container: {
        paddingTop: "84px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center"
    },
    card: {
        marginTop: "40px",
        width: "414px",
        paddingTop: "64px"
    },
    form: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
    },
    input: {
        marginBottom: "22px"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 64px"
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "column",
        width: "100%"
    },
    button: {
        marginBottom: "10px"
    }
}));

enum TabTypes {
    EDIT = "PROFILE/EDIT"
}

const tabs: PageHeaderTabType[] = [{ id: TabTypes.EDIT, name: "Szerkesztés", content: <EditTab /> }];

const ProfilePage: FC = () => {
    const classes = useStyles();

    const actionButtons: PageHeaderActionButtonType[] = [
        { id: 1, buttonType: ButtonType.POSITIVE_ACTION, title: "Mentés", tabsOnly: [TabTypes.EDIT] }
    ];

    return (
        <div className={classes.root}>
            <PageLayout title={"Profil szerkesztése"} tabs={tabs} isLoading={false} actionButtons={actionButtons} />
        </div>
    );
};

export default ProfilePage;
