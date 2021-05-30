import { put, call, select, take } from "redux-saga/effects";
import { eventChannel } from "@redux-saga/core";
import { get } from "lodash";
//
import { uiActions } from "redux/ui/slice";
import UiSelectors from "redux/ui/selectors";

const getWindowWidth = () => get(window, "innerWidth", 0);

const windowResizeChannel = () => {
    return eventChannel(emitter => {
        window.addEventListener("resize", () => emitter(getWindowWidth()));

        return () => window.removeEventListener("resize", getWindowWidth);
    });
};

function* windowWidthChannelSaga() {
    //pre-render
    if (typeof window === "undefined") return;

    const channel = yield call(windowResizeChannel);
    while (true) {
        const width = yield take(channel);
        const prevIsMobileWindow = yield select(UiSelectors.getIsMobileWindow);
        const isMobile = width <= 900;

        if (prevIsMobileWindow !== isMobile) {
            yield put(uiActions.setIsMobileWindow({ isMobileWindow: isMobile }));
        }
    }
}

export default windowWidthChannelSaga;
