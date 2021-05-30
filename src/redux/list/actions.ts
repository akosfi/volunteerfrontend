import { Pagination, Row } from "./types";

export enum ListActionConstants {
    SET_LIST_ROWS = "LIST/SET_LIST_ROWS",
    SET_LIST_IS_LOADING = "LIST/SET_LIST_IS_LOADING",
    SET_LIST_PAGINATION = "LIST/SET_LIST_PAGINATION",
    SET_SELECTED_ROW_IDS = "LIST/SET_SELECTED_ROW_IDS",

    CLEAR_LIST_DATA = "LIST/CLEAR_LIST_DATA"
}

const setListRowsAction = (rows: Row[]) => ({
    type: ListActionConstants.SET_LIST_ROWS,
    payload: {
        rows
    }
});

const setListIsLoading = (isLoading: boolean) => ({
    type: ListActionConstants.SET_LIST_IS_LOADING,
    payload: {
        isLoading
    }
});

const setListPagination = (pagination: Pagination) => ({
    type: ListActionConstants.SET_LIST_PAGINATION,
    payload: {
        pagination
    }
});

const setSelectedRowIds = (rowsIds: number[]) => ({
    type: ListActionConstants.SET_SELECTED_ROW_IDS,
    payload: {
        rowsIds
    }
});

const clearListData = () => ({
    type: ListActionConstants.CLEAR_LIST_DATA
});

const ListActions = {
    setListRowsAction,
    setListIsLoading,
    setListPagination,
    setSelectedRowIds,
    clearListData
};

export default ListActions;
