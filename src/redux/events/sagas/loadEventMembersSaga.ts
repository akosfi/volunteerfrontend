import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import EventActions from "redux/events/actions";
import { fetchMembers } from "mocks";
import { Member } from "redux/events/types";
import { Row } from "../../list/types";
import transformMembersToListRows from "./helpers/transformMembersToListRows";
import ListActions from "../../list/actions";
//

function* loadEventMembersSaga() {
    try {
        //TODO DISABLE MOCK
        //const { data: collections }: AxiosResponse<Collections[]> = yield retry(2, 1500, serverApi.get, "/collections");
        const members: Member[] = yield retry(2, 1500, fetchMembers);

        const listRows: Row[] = transformMembersToListRows(members);

        yield put(ListActions.setListRowsAction(listRows));

        yield put(EventActions.loadEventMembersSuccessAction(members));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load members!");
        yield put(EventActions.loadEventMembersErrorAction(error));
    }
}
export default loadEventMembersSaga;
