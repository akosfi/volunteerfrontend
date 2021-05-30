import { put } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { eventActions } from "redux/events/slice";
import { uiActions } from "redux/ui/slice";
//

function* joinEventRequestSaga({ payload: { eventId } }: ReturnType<typeof eventActions.joinEventRequest>) {
    try {
        yield put(eventActions.joinEventSuccess());
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to join event!");
        yield put(uiActions.pushSnackbarToQueue({ snackbarText: error, snackbarSeverity: "error" }));
        yield put(eventActions.joinEventFailure({ error }));
    }
}
export default joinEventRequestSaga;
