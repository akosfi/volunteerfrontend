import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { eventActions } from "redux/events/slice";
import { fetchMembers } from "mocks";
import { Member } from "redux/events/types";
import { Row } from "redux/list/types";
import { listActions } from "redux/list/slice";
//

function* loadEventMembersRequestSaga({
    payload: { transformer }
}: ReturnType<typeof eventActions.loadEventMembersRequest>) {
    try {
        yield put(listActions.clearListData());
        const members: Member[] = yield retry(2, 1500, fetchMembers);

        const listRows: Row[] = transformer(members);

        yield put(listActions.setListRows({ rows: listRows }));
        yield put(eventActions.loadEventMembersSuccess({ members }));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load members!");
        yield put(eventActions.loadEventMembersFailure({ error }));
    }
}
export default loadEventMembersRequestSaga;
