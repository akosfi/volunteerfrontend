import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import EventActions from "redux/events/actions";
import UiActions from "redux/ui/actions";
import serverApi from "utils/serverApi";
//

function* joinEventSaga({ payload: { eventId } }: ReturnType<typeof EventActions.joinEventsAction>) {
    try {
        yield retry(2, 1500, serverApi.put, `/event/${eventId}/join`);

        //TODO handle success data
        yield put(EventActions.joinEventsSuccessAction());
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to join event!");
        yield put(UiActions.pushSnackbarToQueueAction(error, "error"));
        yield put(EventActions.joinEventsErrorAction(error));
    }
}
export default joinEventSaga;
