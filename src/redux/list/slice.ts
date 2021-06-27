import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter } from "lodash";
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
        setSelectedRowId: (state, action: PayloadAction<{ selectedRowId: number }>) => {
            state.selectedRowIds = [...state.selectedRowIds, action.payload.selectedRowId];
        },
        setDeselectedRowId: (state, action: PayloadAction<{ selectedRowId: number }>) => {
            state.selectedRowIds = filter(state.selectedRowIds, id => id !== action.payload.selectedRowId);
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
