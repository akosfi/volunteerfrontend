import * as React from "react";
import { FC, memo, useRef } from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
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
        display: "block",
        cursor: "pointer",
        width: "24px",
        height: "24px",
        position: "relative"
    },
    clickOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        width: "24px",
        height: "24px",
        opacity: 0
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
    const appbarRef = useRef<HTMLDivElement>(null);

    const excludedPaths = ["/login", "/register"];

    const handleToggleSidebar = () => dispatch(UiActions.setIsSidebarOpenAction(!isSidebarOpen));

    if (excludedPaths.includes(pathname)) return null;

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} ref={appbarRef}>
                <Toolbar className={classes.rootMenu}>
                    <div className={classes.leftMenu}>
                        {isSidebarOpen ? <ClearIcon /> : <MenuIcon />}
                        <div className={classes.clickOverlay} onClick={handleToggleSidebar} />
                    </div>
                    <div>
                        <AccountCircle />
                    </div>
                </Toolbar>
            </AppBar>
            <Sidebar appbarRef={appbarRef} />
        </div>
    );
};

export default memo(Header);
