import { Pagination, Row } from "redux/list/types";

export type ListState = {
    rows: Row[];
    selectedRowIds: number[];
    isLoading: boolean;
    pagination: Pagination;
    hoveredRowId: number | null;
};

export const initialState: ListState = {
    rows: [],
    selectedRowIds: [],
    isLoading: false,
    pagination: { allPageCount: 0, currentPage: 0, limit: 0 },
    hoveredRowId: null
};
