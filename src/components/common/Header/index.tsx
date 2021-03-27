import { FC } from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";

//

const useStyles = makeStyles({
    root: {
        width: "100vw"
    },
    appbar: {
        height: "64px",
        background: "white",
        color: "black"
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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.rootMenu}>
                    <div className={classes.leftMenu}>
                        <MenuIcon />
                    </div>
                    <div>
                        <AccountCircle />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
