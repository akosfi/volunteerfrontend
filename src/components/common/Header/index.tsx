import * as React from "react";
import { FC } from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
//
import Sidebar from "./components/Sidebar";
import UiActions from "redux/ui/actions";
import UiSelectors from "redux/ui/selectors";

//

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        boxShadow: "none"
    },
    appbar: {
        height: "64px",
        background: "white",
        color: "black",
        boxShadow: "none"
    },
    rootMenu: {
        height: "64px",
        minHeight: "64px",
        display: "flex",
        "justify-content": "space-between"
    },
    leftMenu: {
        display: "flex",
        cursor: "pointer"
    },
    mobileMenuIcon: {
        paddingRight: "16px"
    },
    collectionLink: {
        padding: "0 21px",
        "font-size": "14px",
        display: "block",
        cursor: "pointer",
        lineHeight: "24px"
    },
    cartLink: {
        "text-align": "right",
        cursor: "pointer"
    }
});

const Header: FC = () => {
    const isSidebarOpen = useSelector(UiSelectors.getIsSidebarOpen);
    const dispatch = useDispatch();

    const classes = useStyles();
    const { pathname } = useLocation();

    const excludedPaths = ["/login", "/register"];

    const handleToggleSidebar = () => dispatch(UiActions.setIsSidebarOpenAction(!isSidebarOpen));

    if (excludedPaths.includes(pathname)) return null;

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.rootMenu}>
                    <div className={classes.leftMenu}>
                        <MenuIcon onClick={handleToggleSidebar} />
                    </div>
                    <div>
                        <AccountCircle />
                    </div>
                </Toolbar>
            </AppBar>
            <Sidebar />
        </div>
    );
};

export default Header;
