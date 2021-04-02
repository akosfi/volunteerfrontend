import * as React from "react";
import { FC, RefObject, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
//
import { getIsSidebarOpen } from "redux/ui/selectors";
import SidebarContent from "components/common/Header/components/Sidebar/components/SidebarContent";
import usePrevious from "utils/hooks/usePrevious";
import useOnClickOutside from "utils/hooks/useOnClickOutside";
import UiActions from "redux/ui/actions";
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
    root: {
        overflowY: "scroll"
    },
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

type Props = {
    appbarRef: RefObject<HTMLDivElement>;
};

const Sidebar: FC<Props> = ({ appbarRef }) => {
    const isSideBarOpen = useSelector(getIsSidebarOpen);
    const dispatch = useDispatch();

    const classes = useStyles() as any; // :(
    const sidebarRef = useRef<HTMLDivElement>(null);
    const previousIsSideBarOpen = usePrevious(isSideBarOpen);

    useEffect(() => {
        if (!previousIsSideBarOpen && isSideBarOpen && sidebarRef?.current) {
            disableBodyScroll(sidebarRef?.current);
        } else if (previousIsSideBarOpen && !isSideBarOpen && sidebarRef?.current) {
            enableBodyScroll(sidebarRef?.current);
        }

        return () => {
            if (previousIsSideBarOpen && !isSideBarOpen) clearAllBodyScrollLocks();
        };
    }, [isSideBarOpen]);

    const closeSidebar = () => dispatch(UiActions.setIsSidebarOpenAction(false));

    useOnClickOutside([sidebarRef, appbarRef], closeSidebar, isSideBarOpen);

    return (
        <Transition in={isSideBarOpen} timeout={transitionDurationInMs}>
            {state => (
                <div className={classes.root}>
                    <div className={classNames(classes.overlay, classes[`overlay-${state}`])} />
                    <div className={classNames(classes.sidebar, classes[`sidebar-${state}`])} ref={sidebarRef}>
                        <SidebarContent />
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default Sidebar;
