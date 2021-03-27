import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { loadEventsAction, loadEventsErrorAction, loadEventsSuccessAction } from "../actions";
import { Event } from "../types";
//

function* loadEventsSaga() {
    yield put(loadEventsAction());
    try {
        //const { data: collections }: AxiosResponse<Collections[]> = yield retry(2, 1500, serverApi.get, "/collections");
        //const events = yield retry(2, 1500, fetchCollections);
        const events: Event[] = [];

        yield put(loadEventsSuccessAction(events));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load events!");
        yield put(loadEventsErrorAction(error));
    }
}
export default loadEventsSaga;
