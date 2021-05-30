import { put } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { eventActions } from "redux/events/slice";
import UiActions from "redux/ui/actions";
//

function* joinEventRequestSaga({ payload: { eventId } }: ReturnType<typeof eventActions.joinEventRequest>) {
    try {
        yield put(eventActions.joinEventSuccess());
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to join event!");
        yield put(UiActions.pushSnackbarToQueueAction(error, "error"));
        yield put(eventActions.joinEventFailure({ error }));
    }
}
export default joinEventRequestSaga;
