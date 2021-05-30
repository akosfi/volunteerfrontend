import { Reducer } from "redux";
import { produce } from "immer";
//
import { Pagination, Row } from "redux/list/types";
import { ListActionConstants } from "redux/list/actions";
//

export type ListState = {
    rows: Row[];
    selectedRowIds: number[];
    isLoading: boolean;
    pagination: Pagination;
};

export const initialState: ListState = {
    rows: [],
    selectedRowIds: [],
    isLoading: false,
    pagination: { allPageCount: 0, currentPage: 0, limit: 0 }
};

const reducer: Reducer<ListState> = (state = initialState, action): ListState => {
    switch (action.type) {
        case ListActionConstants.SET_LIST_ROWS: {
            return produce(state, draft => {
                draft.rows = action.payload.rows;
            });
        }

        case ListActionConstants.SET_LIST_IS_LOADING: {
            return produce(state, draft => {
                draft.isLoading = action.payload.isLoading;
            });
        }

        case ListActionConstants.SET_LIST_PAGINATION: {
            return produce(state, draft => {
                draft.pagination = action.payload.pagination;
            });
        }

        case ListActionConstants.SET_SELECTED_ROW_IDS: {
            return produce(state, draft => {
                draft.selectedRowIds = action.payload.rowIds;
            });
        }

        case ListActionConstants.CLEAR_LIST_DATA: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};
export default reducer;
