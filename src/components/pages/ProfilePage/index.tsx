import * as React from "react";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";
//
import { PageHeaderActionButtonType, PageHeaderTabType } from "components/common/PageLayout/components/PageHeader";
import PageLayout from "components/common/PageLayout";
import { ButtonType } from "components/common/Button";
import EditTab from "components/pages/ProfilePage/components/tabs/EditTab";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    container: {
        width: "75%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "100%",
        marginTop: "28px",
        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "55% 1fr 33%"
        }
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
