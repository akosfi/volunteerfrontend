import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { eventActions } from "redux/events/slice";
import { fetchEvents } from "mocks";
import { Event } from "redux/events/types";
//

function* loadEventsRequestSaga() {
    try {
        const events: Event[] = yield retry(2, 1500, fetchEvents);

        yield put(eventActions.loadEventsSuccess({ events }));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load events!");
        yield put(eventActions.loadEventsFailure({ error }));
    }
}
export default loadEventsRequestSaga;
