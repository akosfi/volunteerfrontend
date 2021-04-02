import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import classNames from "classnames";
//
import { getIsSidebarOpen } from "redux/ui/selectors";
import SidebarContent from "components/common/Header/components/Sidebar/components/SidebarContent";
//

const transitionDurationInMs = 200;

const defaultOverlayTransitionStyles: { [key: string]: string } = {
    opacity: "15%",
    transition: `opacity ${transitionDurationInMs}ms ease-in-out`,
    visibility: "visible"
};

const defaultSidebarTransitionStyles: { [key: string]: string } = {
    transform: "translateX(0)",
    transition: `transform ${transitionDurationInMs}ms ease-in-out`,
    visibility: "visible"
};

const useStyles = makeStyles({
    root: {},
    overlay: {
        width: "100vw",
        zIndex: 1,
        height: "calc(100vw - 64px)",
        position: "absolute",
        top: "64px",
        left: 0,
        background: "black",
        opacity: "0",
        transition: `opacity ${transitionDurationInMs}ms ease-in-out`,
        visibility: "hidden"
    },
    "overlay-entering": defaultOverlayTransitionStyles,
    "overlay-entered": defaultOverlayTransitionStyles,
    "overlay-exiting": { ...defaultOverlayTransitionStyles, opacity: 0 },
    "overlay-exited": { ...defaultOverlayTransitionStyles, opacity: 0, visibility: "hidden" },

    sidebar: {
        width: "278px",
        height: "calc(100vw - 64px)",
        position: "absolute",
        top: "64px",
        left: 0,
        background: "white",
        zIndex: 2,
        visibility: "hidden",
        transform: "translateX(-100%)"
    },
    "sidebar-entering": defaultSidebarTransitionStyles,

    "sidebar-entered": defaultSidebarTransitionStyles,
    "sidebar-exiting": {
        ...defaultSidebarTransitionStyles,
        transform: "translateX(-100%)"
    },
    "sidebar-exited": { ...defaultSidebarTransitionStyles, transform: "translateX(-100%)", visibility: "hidden" }
});

const Sidebar: FC = () => {
    const isSideBarOpen = useSelector(getIsSidebarOpen);

    const classes = useStyles() as any; // :(

    return (
        <Transition in={isSideBarOpen} timeout={transitionDurationInMs}>
            {state => (
                <div className={classes.root}>
                    <div className={classNames(classes.overlay, classes[`overlay-${state}`])} />
                    <div className={classNames(classes.sidebar, classes[`sidebar-${state}`])}>
                        <SidebarContent />
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default Sidebar;
