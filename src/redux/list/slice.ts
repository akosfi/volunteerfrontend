import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/list/state";
import { Pagination, Row } from "redux/list/types";

const listSlice = createSlice({
    name: "LIST",
    initialState,
    reducers: {
        setListRows: (state, action: PayloadAction<{ rows: Row[] }>) => {
            state.rows = action.payload.rows;
        },
        setListIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading;
        },
        setListPagination: (state, action: PayloadAction<{ pagination: Pagination }>) => {
            state.pagination = action.payload.pagination;
        },
        setSelectedRowIds: (state, action: PayloadAction<{ selectedRowIds: number[] }>) => {
            state.selectedRowIds = action.payload.selectedRowIds;
        },
        clearListData: state => {
            state = initialState;
        }
    }
});

export const { actions: listActions, reducer: listReducer } = listSlice;
export type { ListState } from "redux/list/state";
export { initialState } from "redux/list/state";
