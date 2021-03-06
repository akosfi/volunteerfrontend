import * as React from "react";
import { FC, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { get, map, find } from "lodash";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import { uiActions } from "redux/ui/slice";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "100%"
    },
    container: {
        padding: "24px"
    },
    profile: {
        display: "flex",
        alignItems: "center"
    },
    profilePictureWrapper: {
        width: "64px",
        height: "64px",
        borderRadius: "100%",
        overflow: "hidden",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)"
    },
    profilePictureImg: {
        width: "100%",
        height: "100%"
    },
    profileDetail: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "24px",
        flexDirection: "column"
    },
    profileDetailText: {
        fontSize: "16px",
        lineHeight: "20px"
    },
    list: {
        paddingTop: "28px"
    },
    listItem: {
        display: "block",
        height: "36px",
        lineHeight: "36px",
        paddingLeft: "16px",
        cursor: "pointer"
    },
    listItemTitle: {
        lineHeight: "36px",
        display: "block",
        fontSize: "16px"
    },
    listItemActive: {
        fontWeight: "bold",
        background: "#EDEDED"
    }
}));

const listItems = [
    { id: 0, title: "Események", href: "/" },
    { id: 1, title: "Önkéntesek", href: "/members" },
    { id: 2, title: "Profil", href: "/profile" }
];

const SidebarContent: FC = () => {
    const { pathname } = useLocation();
    const history = useHistory();

    const dispatch = useDispatch();

    const [activeListItemId, setActiveListItemId] = useState(get(listItems, "[0]", null));

    useEffect(() => {
        const listItem = find(listItems, ({ href }) => href === pathname);
        const listItemId = listItem ? listItem.id : null;
        setActiveListItemId(listItemId);
    }, [pathname]);

    const handleListItemSelect = (url: string) => {
        dispatch(uiActions.setIsSidebarOpen({ isSidebarOpen: false }));
        history.push(url);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.profile}>
                    <div className={classes.profilePictureWrapper}>
                        <img
                            src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Sami-Viitama%CC%88ki--414x414.jpeg"
                            alt="Profile picture."
                            className={classes.profilePictureImg}
                        />
                    </div>
                    <div className={classes.profileDetail}>
                        <p className={classes.profileDetailText}>
                            <b>Ács Dezső</b>
                        </p>
                        <p className={classes.profileDetailText}>Tartalomkezelő</p>
                    </div>
                </div>
                <div className={classes.list}>
                    {map(listItems, listItem => (
                        <div
                            className={classNames(classes.listItem, {
                                [classes.listItemActive]: activeListItemId === listItem.id
                            })}
                            onClick={() => handleListItemSelect(listItem.href)}
                        >
                            <span>{listItem.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;
