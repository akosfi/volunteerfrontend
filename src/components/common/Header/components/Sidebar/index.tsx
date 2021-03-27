import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
//
import { getIsSidebarOpen } from "redux/ui/selectors";
import { CSSTransition } from "react-transition-group";
//

const useStyles = makeStyles({
    root: {
        width: "278px",
        height: "calc(100vw - 64px)",
        position: "absolute",
        top: "64px",
        left: 0,
        background: "white",
        "&-enter-active": {
            background: "red"
        }
    }
});

const Sidebar: FC = () => {
    const classes = useStyles();

    const isSideBarOpen = useSelector(getIsSidebarOpen);

    if (!isSideBarOpen) return null;

    return (
        <CSSTransition in={isSideBarOpen} timeout={200} classNames={classes.root}>
            <div className={classes.root}>asd</div>
        </CSSTransition>
    );
};

export default Sidebar;
