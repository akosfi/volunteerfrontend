import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.list;

const getRows = (state: StoreState) => getState(state).rows;
const getIsLoading = (state: StoreState) => getState(state).rows;
const getSelectedRowIds = (state: StoreState) => getState(state).rows;
const getPagination = (state: StoreState) => getState(state).pagination;

const ListSelectors = { getRows, getIsLoading, getSelectedRowIds, getPagination };

export default ListSelectors;
