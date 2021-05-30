import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { eventActions } from "redux/events/slice";
import { fetchMembers } from "mocks";
import { Member } from "redux/events/types";
import { Row } from "redux/list/types";
import transformMembersToListRows from "./helpers/transformMembersToListRows";
import { listActions } from "redux/list/slice";
//

function* loadEventMembersRequestSaga() {
    try {
        const members: Member[] = yield retry(2, 1500, fetchMembers);

        const listRows: Row[] = transformMembersToListRows(members);

        yield put(listActions.setListRows({ rows: listRows }));
        yield put(eventActions.loadEventMembersSuccess({ members }));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load members!");
        yield put(eventActions.loadEventMembersFailure({ error }));
    }
}
export default loadEventMembersRequestSaga;
