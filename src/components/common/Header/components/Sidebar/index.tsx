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
        background: "white"
    },
    enter: {
        background: "red"
    }
});

const Sidebar: FC = () => {
    const classes = useStyles();

    const isSideBarOpen = useSelector(getIsSidebarOpen);

    return (
        <CSSTransition
            in={isSideBarOpen}
            timeout={200}
            classNames={{ appear: classes.enter, appearActive: classes.enter }}
        >
            <div className={classes.root}>asd</div>
        </CSSTransition>
    );
};

export default Sidebar;
