import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { loadEventsErrorAction, loadEventsSuccessAction } from "redux/events/actions";
import { fetchEvents } from "mocks";
import { Event } from "redux/events/types";
//

function* loadEventsSaga() {
    try {
        //TODO DISABLE MOCK
        //const { data: collections }: AxiosResponse<Collections[]> = yield retry(2, 1500, serverApi.get, "/collections");
        const events: Event[] = yield retry(2, 1500, fetchEvents);

        yield put(loadEventsSuccessAction(events));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load events!");
        yield put(loadEventsErrorAction(error));
    }
}
export default loadEventsSaga;
